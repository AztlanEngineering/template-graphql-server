//TODO Access type offline
const isLocal = process.env.LOCAL === 'true'
if (isLocal){
  require('dotenv').config()
}

const {
  GOOGLE_OAUTH_CLIENT:id,
  GOOGLE_OAUTH_KEY:secret,
  GOOGLE_OAUTH_HOST_AUTHORIZE:HOST_AUTHORIZE,
  GOOGLE_OAUTH_HOST_TOKEN:HOST_TOKEN
} = process.env

const scope = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
  //'https://www.googleapis.com/auth/drive.appdata', //RWD GDrive Conf
  //'https://www.googleapis.com/auth/drive', //RWD GDrive
  //'https://www.googleapis.com/auth/drive.file', //RWD AppFiles in GDrive (lower permission lvlv)
  //'https://www.googleapis.com/auth/drive.metadata'
]

export default {
  provider   :'google',
  timeToLogin:120,
  client     :{
    id,
    secret
  },
  auth:{
    authorizeHost       :'https://accounts.google.com',
    authorizePath       :'/o/oauth2/auth',
    tokenHost           :'https://oauth2.googleapis.com',
    tokenPath           :'/token',
    scope,
    accessType          :'online',//'offline',
    authorizeRedirectUri:`${HOST_AUTHORIZE}/auth/google/callback`,
    getRedirectUri      :(user, authorizationCode) => {
      if (!user.is_active) {
        return `${HOST_TOKEN}/fail`
      }
      return `${HOST_TOKEN}/redeem/${authorizationCode}`
      
    }
  },
  tokenInvalidationUri:(t) => `https://accounts.google.com/o/oauth2/revoke?token=${t}`,
  profileApi          :'https://www.googleapis.com/oauth2/v3/userinfo'
}
