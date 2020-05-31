const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
  //'https://www.googleapis.com/auth/drive.appdata', //RWD GDrive Conf
  //'https://www.googleapis.com/auth/drive', //RWD GDrive
  //'https://www.googleapis.com/auth/drive.file', //RWD AppFiles in GDrive (lower permission lvlv)
  //'https://www.googleapis.com/auth/drive.metadata'
]

const endpoints = {
  GET:{
    revokeToken:(t) => `https://accounts.google.com/o/oauth2/revoke?token=${t}`,
  },
  POST:{
    getToken:() => 'https://oauth2.googleapis.com/token',
  },
}

export default class Config {
  static name = 'google'

  static service = {
    clientId            :process.env.OAUTH2_GOOGLE_CLIENT,
    clientSecret        :process.env.OAUTH2_GOOGLE_SECRET,
    authorizeFullPath   :'https://accounts.google.com/o/oauth2/auth', 
    accessType          :'offline',//'offline',
    authorizeRedirectUri:`${process.env.OAUTH2_GOOGLE_HOST_AUTHORIZE}/auth/google/callback`,
    scope, 
  }

  static endpoints = endpoints

  static getAuthorizeParameters = function(state) {
    //We return the GET parameters passed appended the the authorization uri, which will generate the user prompt page
    //https://developers.google.com/identity/protocols/oauth2/web-server#httprest
    const {
      clientId:client_id,
      authorizeRedirectUri:redirect_uri,
      scope,
      accessType:access_type,
    } = this.service

    return {
      client_id,
      redirect_uri,
      access_type,

      scope:(typeof(scope) === 'object') ?
        scope.join('+') :
        scope,

      response_type:'code',
      prompt       :'consent', // to make sure a refresh token is issued https://github.com/googleapis/google-api-python-client/issues/213
      state,
    }
  }

  

}
