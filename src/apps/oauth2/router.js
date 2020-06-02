import { GoogleAccessManager } from './strategies'
import { GoogleAPI } from './utils'
import models from 'models'

const OAuth2ProfileModel = models.OAuth2Profile
const SetterModel = models.OAuth2Setter
const UserModel = models.User

const callbacks = require('express').Router()

const OAUTH2_CLIENT_URL = process.env.OAUTH2_CLIENT_URL
const IS_SIGNUP_ALLOWED = process.env.AUTH_SIGNUP_ENABLED === 'true'

const redirectUrlMap = {
  unauthorized:() => `${OAUTH2_CLIENT_URL}/unauthorized`,
  google      :{
    unauthorized:() => `${OAUTH2_CLIENT_URL}/unauthorized`,
    authorized  :(authorizationCode) => `${OAUTH2_CLIENT_URL}/redeem/${authorizationCode}`
  }
}

callbacks.get(
  '/:setter/callback',
  async (req, res) => {
    const { 
      state, 
      scope, 
      code:authorizationCode 
    } = req.query

    /*
    //Req Query looks like :
    {
      code: '4/0QEIn7aBZTytXqgh-o0qqLn3LA_VtbCtF-euQhD_SDCvR8TAGnN0A7MCldzL3rDxxxxxxxxxxxxxxxxxxxx_dek',
      scope: 'email profile https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile',
      authuser: '0',
      hd: 'fwrlines.com',
      prompt: 'none'
      state:'The state passed previously'
    }
    */
    //console.log(99999, req.query)

    if (!(scope && authorizationCode)) {
      res.status(400).send('Bad request')
    }

    var provider

    if (req.params.setter === 'google'){

      provider = 'google'
      
      // 1. We arrived here because Google redirected the user to this callback after a successful login on their prompt

      const accessManager = new GoogleAccessManager({
        state,
        authorizationCode
      })
      await accessManager.init()

      // 2. We exchange the auth code for a refresh and an access token.
      //    The refresh token is only issued if access_type is offline and prompt = consent

      const { 
        access_token,
        refresh_token,
        scope,
      } = await accessManager.redeemTokensFromAuthCode()

      // 3. We instantiate a Google API class with the access token to access further data.
      //    We GET the user profile profile

      const api = new GoogleAPI(access_token) 

      const profile = await api.getProfile()

      const email = profile.email

      console.log(profile)

      // 4. We test whether there is already a OAuth2 Profile with this email

      const existingProfile = await OAuth2ProfileModel.findOne({
        where:{
          email,
          provider
        },
        include:{ 
          all:true 
        }
      })

      // 5. We are in the case of the user not being connected. So we try to log him in, or to create an account

      if (existingProfile) {

        // 5.1 We update the oAuth profile
        console.log('5.1 existing profile', existingProfile)
        
        const updatedProfile = {
          scope,

          refreshToken :refresh_token,
          name         :profile.name,
          emailVerified:profile.email_verified,
          locale       :profile.locale,
          picture      :profile.picture
        }   

        await OAuth2ProfileModel.update(
          updatedProfile,
          {
            where:{
              id:existingProfile.id,
            }
          }
          
        )

        const updatedUser = {
          firstName:profile.given_name,
          lastName :profile.family_name,
        }

        const updated = await UserModel.update(
          updatedUser,
          {
            where:{
              id:existingProfile.user.id,
            },
            returning:true
          }
        )

        const inst = updated[1][0]

        if(inst.canLogIn()) {
          const setter = await SetterModel.create({
            userId    :inst.id,
            useToLogin:true,
            provider
          })
          res.redirect(redirectUrlMap.google.authorized(setter.code))
        } else {
          res.redirect(redirectUrlMap.google.unauthorized())
        }


      } else {
        
        // 5.2 We check whether a user with the same email exists
        
        const existingUser = await UserModel.findOne({
          where:{
            email,
          }
        })

        if (existingUser) {

          // 5.2.1 We create an oAuth2 profile for this user 
          console.log('5.2.1 User without profile', existingUser)

          const newProfile = {
            provider,
            scope,
            email,

            refreshToken :refresh_token,
            name         :profile.name,
            emailVerified:profile.email_verified,
            locale       :profile.locale,
            userId       :existingUser.id,
            picture      :profile.picture,
          }   

          await OAuth2ProfileModel.create(newProfile)

          const updatedUser = {
            firstName    :profile.given_name,
            lastName     :profile.family_name,
            emailVerified:profile.email_verified
          }

          const updated = await UserModel.update(
            updatedUser,
            {
              where:{
                id:existingUser.id,
              },
              returning:true,
            }
          )

          const inst = updated[1][0]

          if(inst.canLogIn()) {
            const setter = await SetterModel.create({
              userId    :inst.id,
              useToLogin:true,
              provider
            })
            res.redirect(redirectUrlMap.google.authorized(setter.code))
          } else {
            res.redirect(redirectUrlMap.google.unauthorized())
          } 
          
        } else {

          // 5.2.2 If signup is permitted, we create a new user

          if(IS_SIGNUP_ALLOWED) {
            console.log('5.2.2 signup')

            const newProfile = {
              provider,
              scope,
              email,

              refreshToken :refresh_token,
              name         :profile.name,
              emailVerified:profile.email_verified,
              locale       :profile.locale,
              picture      :profile.picture,
            }   

            const newUser = {
              email,
              emailVerified:profile.email_verified,
              firstName    :profile.given_name,
              lastName     :profile.family_name,
              isActive     :true,
            }

            const inst = await UserModel.create(newUser)

            newProfile.userId = inst.id

            await OAuth2ProfileModel.create(newProfile)

            if(inst.canLogIn()) {
              const setter = await SetterModel.create({
                userId    :inst.id,
                useToLogin:true,
                provider
              })
              res.redirect(redirectUrlMap.google.authorized(setter.code))
            } else {
              res.redirect(redirectUrlMap.google.unauthorized())
            }
          } else {
            res.redirect(redirectUrlMap.google.unauthorized())
          }
        }

      }

    } else { //If provider is not google
      res.redirect(
        redirectUrlMap.unauthorized()
      )

    }

  }


)
export default callbacks

