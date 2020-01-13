import rp from 'request-promise'
import queryString from 'query-string'

const GDRIVE_SCOPES = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
]

class gDriveAuth {
  constructor(){
    this.config = {
      providerShort:'GD',
      client       :{
        id    :process.env.GDRIVE_ID,
        secret:process.env.GDRIVE_SECRET
      },
      auth:{
        authorizeHost       :'https://accounts.google.com',
        authorizePath       :'/o/oauth2/auth',
        tokenHost           :'https://oauth2.googleapis.com',
        tokenPath           :'/token',
        scope               :GDRIVE_SCOPES,
        accessType          :'offline',
        authorizeRedirectUri:'http://localhost:4000/auth/gdrive/callback',
        tokenRedirectUri    :'http://localhost:3000/profile'
      }
    }
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
	
  postTokenRequestParameters(c=null, setter_id=null, refresh_token=null){
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
        state:setter_id
      }
    )
  }

  async postTokenRequest(code=null, setter=null){
    const request_params = {
      method:'POST',
      uri   :this.tokenFullPath(),
      body  :this.postTokenRequestParameters(code, setter),
      json  :true
    }
    const body = await rp(request_params)
    let t = {
      //access_token: body.access_token,
      refresh_token:body.refresh_token,
      //id_token: body.id_token,
      provider     :this.config.auth.authorizeHost,
      email        :'',
      //expires_in: body.expires_in,
      //token_type: body.token_type,
      scope        :body.scope,
      ps           :this.config.providerShort
    }
    return {
      oauth2Info  :t,
      access_token:body.access_token
    }
  }

  async postRefreshTokenRequest(refresh) {
    console.log('refresh with', refresh)
    const request_params = {
      method:'POST',
      uri   :this.tokenFullPath(),
      body  :this.postTokenRequestParameters({ refresh_token: refresh }),
      json  :true
    }
    const body = await rp(request_params)
    return body.access_token

  }
}

function authorizationUri(setter){
  return new gDriveAuth().getAuthorizationUri(setter)
}

async function revokeGDriveToken(token){
  await rp({
    method:'GET',
    url   :'https://accounts.google.com/o/oauth2/revoke?token=' + token,
    body  :''
  })
  return 0
}

export {
  gDriveAuth,
  authorizationUri as gDriveAuthorizationUri,
  revokeGDriveToken
}

