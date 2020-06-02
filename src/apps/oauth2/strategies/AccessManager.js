import rp from 'request-promise'
import qs from 'querystring'

import models from 'models'
const Setter = models.Setter

export default class Manager {

  static strategy = {
    signupAllowed:process.env.SIGNUP === 'true'
  }

  constructor(
    OAuth2ConfigurationClass={},
    context={},
  ) {
    // 1. We keep the configuration class to store constants and static methods based on them
    this.Config = OAuth2ConfigurationClass

    // 2. We keep an object to hold state-related variables of the OAuth Manager
    // For instance `state`, `authorizationCode`, `refreshToken`
    this.context = context

    // 3. We keep the data we will receive in the future in an object
    this.data = {}



  }

  // 
  // 0. Helper init method, because async
  //
  
  async init() {
    // We use this method for the instantiation because we need to async / await the setter association
    // 1. In case the Manager is inited with state, we find the setter associated with it. This will give us access to the user we're working with
    const state = this.context.state

    if (this.context.state) {
      this.context.setter = await Setter.findOne(
        { 
          include:{ all: true } ,
          where  :{ code: state }
        }
      )
    }

  }



  //
  // 1. METHODS RELATED TO THE RETRIEVAL OF THE AUTHORIZATION URL
  //


  getAuthorizeParameters(state) {
    // We delegate this method to the Configuration class as it's more closely tied to the provider than the oauth logic
    return this.Config.getAuthorizeParameters(state)
  }

  getAuthorizationUri(state) {
    const queryString = qs
      .stringify(this.getAuthorizeParameters(state))
      .replace(/%2B/g, '+')
    return this.Config.service.authorizeFullPath + '?' + queryString
  }

  //
  // 2. METHODS RELATED TO GETTING THE ACCESS TOKEN
  // CURRENTLY WE ONLY IMPLEMENT THE 'BIGGEST' ONE, WHICH IS THE EXCHANGE OF THE AUTH CODE FOR BOTH ACCESS AND REFRESH
  // THE METHOD CALLED AMONG THESE SHOULD SAVE IN this.data THE access_token
  // 
  
  /* UNTESTED
  getTokensFromRefreshTokenParameters() {
    const serviceConfig = this.Config.service
    return {
      grant_type:'refresh_token',

      refresh_token :this.context.refreshToken,
      state:this.context.state,

      redirect_uri :serviceConfig.authorizeRedirectUri, //Unsure whether this is actually used. Anyways its the same as in Config = getAuthorizeParameters
      client_id    :serviceConfig.clientId,
      client_secret:serviceConfig.clientSecret,
      scope        :(typeof(serviceConfig.scope) === 'object') ?
        serviceConfig.scope.join(' ') :
        serviceConfig.scope,
    }
  }
  
  async redeemTokensFromRefreshToken() {
    const options = {
      method:'POST',
      uri   :this.Config.endpoints.POST.getToken(),
      json  :true,
      body  :this.getRedeemTokenFromAuthCodeParameters() 
    }
    const res = await rp(options)

    const {
      access_token,
      refresh_token,
      token_type,
      id_token,
      scope,
    } =  res

    // We dont save the expiration because we can regenerate later, if needed, access tokens using the refresh token

    this.data = {
      ...this.data, //should be empty if this is the first method we call
      token_type,
      id_token,
      access_token,
      refresh_token,
      scope,
    }

  }
  */

  getTokensFromAuthCodeParameters() {
    const serviceConfig = this.Config.service
    return {
      grant_type:'authorization_code',

      code :this.context.authorizationCode,
      state:this.context.state,

      redirect_uri :serviceConfig.authorizeRedirectUri, //Unsure whether this is actually used. Anyways its the same as in Config = getAuthorizeParameters
      client_id    :serviceConfig.clientId,
      client_secret:serviceConfig.clientSecret,
      scope        :(typeof(serviceConfig.scope) === 'object') ?
        serviceConfig.scope.join(' ') :
        serviceConfig.scope,
    }
  }
  
  async redeemTokensFromAuthCode() {
    const options = {
      method:'POST',
      uri   :this.Config.endpoints.POST.getToken(),
      json  :true,
      body  :this.getTokensFromAuthCodeParameters() 
    }
    const res = await rp(options).catch(e =>
      console.log('ERROR EXCHANGING THE TOKENS', e)
    )

    //console.log(6667788, 'got this back sb refresh t', res)

    /* IF we configured everything properly, namely offline access, and prompting user for consent, we should get both an access and a refresh token like this. Here is an example of the answer
    res = {
      access_token: 'ya29.a0AfH6SMCOSbtXrc3ezyD-usm-',
      expires_in: 3599,
      refresh_token: '1//09EPFmV1mNNeKCgYIARAAGAkSNwF',
      scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email openid',
      token_type: 'Bearer',
      id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZiOGNhNWI3ZDhkOWE1YzZjNjc4ODA3MWU4NjZjNmM0MGYzZmMxZjkiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5j
    }
    */

    const {
      access_token,
      refresh_token,
      token_type,
      id_token,
      scope,
    } =  res

    // We dont save the expiration because we can regenerate later, if needed, access tokens using the refresh token

    this.data = {
      ...this.data, //should be empty if this is the first method we call
      token_type,
      id_token,
      access_token,
      refresh_token,
      scope,
    }

    return {
      access_token,
      refresh_token,
      scope,
      token_type
    } //We also return it sso we can use the AT to instantiate the user api

  }

  // 
  // 3. LIFECYCLE METHODS
  //
  
  async revokeToken(token){
    return await rp({
      method:'GET',
      url   :this.Conf.endpoints.GET.revokeToken(token),
    })
  }

}
