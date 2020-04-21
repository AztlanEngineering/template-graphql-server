import rp from 'request-promise'
import queryString from 'query-string'
import {
  User
} from 'auth/models'
import { Setter } from './models'
import { SetterController } from './controllers'

export default class Manager {
  constructor(config={}, context={}, isLogin=true){
    this.config = config
    this.context = context
    this.authData = {}
    this.authData.refresh_token = this.context.refresh_token
    this.isLogin = isLogin

    /*
    this.context = {

      authorizationCode,
      refresh_token,
      user,
      state}

    this.authData={
      refreshToke
      provider
      email
      scope
      provider
      access_token
      //id_token
      expires_in
      token_type
    }
      */
  }

  async init(){
    if (this.context.state){
      this.getUserSetter()
    }
    if (this.context.authorizationCode){
      await this.postTokenRequest()
    }
    if (this.context.refresh_token) {
      await this.postTokenRequest()
    }

  }
  
  getRedirectUri(){
    return this.config.auth.getRedirectUri(this.currentUser, this.context.state)
  }

  authorizeFullPath() {
    return this.config.auth.authorizeHost + this.config.auth.authorizePath
  }

  tokenFullPath() {
    return this.config.auth.tokenHost + this.config.auth.tokenPath
  }

  getAuthorizationUriParameters(setter=null) {
    // CLEAN TODO
    return (
      {
        response_type:'code',
        client_id    :this.config.client.id,
        redirect_uri :this.config.auth.authorizeRedirectUri,
        scope        :(typeof(this.config.auth.scope) === 'object') ?
          this.config.auth.scope.join('+') :
          this.config.auth.scope,
        access_type:this.config.auth.accessType,
        state      :setter
      }
    )
  }

  getAuthorizationUri(setter=null) {
    const query = queryString
      .stringify(this.getAuthorizationUriParameters(setter))
      .replace(/%2B/g, '+')
    return this.authorizeFullPath() + '?' + query
  }
	
  postTokenRequestParameters(c=null, state=null, refresh_token=null){
    // TODO throw err if c & refresh_token
    return (
      {
        grant_type:c ?
          'authorization_code' : 'refresh_token',
        refresh_token:c ?
          null : refresh_token,
        code:c ?
          c : null,
        redirect_uri:c ?
          this.config.auth.authorizeRedirectUri : null,
        client_id    :this.config.client.id,
        client_secret:this.config.client.secret,
        scope        :(typeof(this.config.auth.scope) === 'object') ?
          this.config.auth.scope.join(' ') :
          this.config.auth.scope,
        state
      }
    )
  }

  async postTokenRequest(){
    const {
      authorizationCode,
      refresh_token,
      state
    } = this.context
    const request_params = {
      method:'POST',
      uri   :this.tokenFullPath(),
      json  :true,
      body  :refresh_token ?
        this.postTokenRequestParameters({ refresh_token }):
        this.postTokenRequestParameters(authorizationCode, state)
    }
    const {
      expires_in,
      token_type,
      access_token,
      refresh_token:rt,
      scope
    } = await rp(request_params)
    this.authData = {
      ...this.authData,
      refresh_token:rt,
      provider     :this.config.auth.authorizeHost,
      email        :'',
      scope    ,
      provider     :this.config.provider,
      expires      :Date.now() + expires_in * 1000,
      access_token,
      token_type
      //id_token: body.id_token,
    }
    //console.log('POST w params', request_params, this.authData)

  }

  async getUserSetter(){
    if (this.context.state){
      const setter = await Setter
        .findOne({ code: this.context.state })
        .populate({ path: 'user', model: User })
      //TODO if (!setter.is_valid)
      //console.error('Access Token Error', error.message)
      //return res.status(500).json('Authentication failed')
      this.context.setter = setter
      Setter.deleteOne({ code: this.context.u })
    }
    else this.context.setter = {}
  }

  async revokeToken(token){
    await rp({
      method:'GET',
      url   :this.conf.tokenInvalidationUri(token),
      body  :''
    })
    return 0
  }

  async getProfile(){
    this.authData ={
      ...this.authData,
      ...await rp({
        uri    :this.config.profileApi,
        method :'GET',
        headers:{
          Authorization:'Bearer ' + this.authData.access_token
        },
        json:true
      })

    }

  }

  async useStrategy(){
    if (this.isLogin){
      //We look for an existing user, and if we don'tfind one, we signup is the global variables is set. Then we edirect(user, state), defined in the config
      const {
        scope,
        refresh_token,
        access_token,
        picture,
        locale,
        name,
        expires,
        email,
        email_verified,
        provider,
        given_name:first_name,
        family_name:last_name
      } = this.authData

      this.currentUser = await User.findOneAndUpdate(
        {
          'oauth2.email':email
        },
        {
          $set:{
            'oauth2.$[el].scope'        :scope,
            'oauth2.$[el].refresh_token':refresh_token,
            'oauth2.$[el].access_token' :access_token,
            'oauth2.$[el].picture'      :picture,
            'oauth2.$[el].locale'       :locale,
            'oauth2.$[el].name'         :name,
            'oauth2.$[el].expires'      :expires
          }
        },
        {
          arrayFilters     :[ { 'el.email': email }],
          returnNewDocument:true
      
        }
      )
      //console.log('USER FOUND', this.currentUser)

      if (this.currentUser) {
        void(0) //Redirect to login sucessful and set up json data
        //redirect him to the onboarding if it exists
      }
      else if (process.env.SIGNUP) {
        //console.log('🚌 signup')
        // Create the user
        this.currentUser = new User(
          {
            email,
            email_verified,
            picture,
            first_name,
            last_name,
            oauth2:[]
          })

        const oAuthSchema ={
          scope,
          refresh_token,
          access_token,
          picture,
          locale,
          name,
          expires,
          email,
          email_verified,
          provider
        }

        this.currentUser.oauth2.push(oAuthSchema)
        await this.currentUser.save()
        this.isSignup = true

        // Login him and redirect him to the onboarding if exists
        void(0)
      }

      /*
      else {
        // We could redirect to failure here already but
        // we choose to do in the getRedirectionUri function
        void(0)
      }*/

      // After we've set up currentuser (from User find or create)
      // We create a setter to keep the state, and redirect to a client
      // ... page that will get the json token
      this.context.setter = this.context.setter ? (
        await SetterController.update(
          {},
          {
            code :this.context.setter.code,
            input:{ user: this.currentUser, use_to_login: true }
          }
        )) :(
        await SetterController.add(
          {},
          { input:{
            user        :this.currentUser,
            use_to_login:true,
            provider    :'google'
          }
          }
        ))
      this.context.state = this.context.setter.code

      //console.log('COMPLETE', this.currentUser, this.context.setter, this.isSignup)
      return this.getRedirectUri()

    }
    
    TODO
    //We're connecting an existing account to this oAuth2 account, so we'll fetch the user first and then add the oAuth identity to his profile

    //The setter gave us the user
    const {
      user:alreadyLoggedInUser
    } = this.context.setter

    //We


    /*
    set
  //token_type: String,

    this.currentUser = await User.findOneAndUpdate(
      {
        '_id'         :alreadyLoggedInUser._id ,
        'oauth2.email':this.authData.email
      },
      )*/
  }


}
