import { ConfigurationError } from 'utils'
import jwt from 'jsonwebtoken'

const models = import('models.js')

export default async (user, secret=process.env.JWT_SECRET) => {
  if (!secret) {
    throw new ConfigurationError({ message: 'No jwt secret kei providedy' })
  }
  const { default:m } = await models //lazy loading models
  const Token = m.Token

  const payload = {
    id      :user.id,
    email   :user.email,
    username:user.username
    //user_agent: context.user_agent
  }
  
  /* //DEPRECATED for serverless
  const algorithm = secret ? 'HS512' : 'RS256'
  let key = null
  if (algorithm === 'HS512') {
    key = secret
  }
  else {
    key = ''
    //key = fs.readFileSync('./keys/jwt_private.pem', 'utf-8')
  }
  */
  //console.log(888, user)

  const key = secret

  const tokenDuration = Number(process.env.SESSION_DURATION)

  const token = jwt.sign(payload,
    key, {
      issuer   :process.env.JWT_ISSUER || 'Fwrlines',
      subject  :'auth',
      audience :process.env.JWT_AUDIENCE || 'fwrlines.com',
      expiresIn:tokenDuration,
      algorithm:'HS512'
    }
    //, (err, token) => {}
  )
  // TODO If we store the tokens, it's to be able to invalidate them.
  // This is currently not implemented. If not we shoud NOT persist JWT's in the DB
  // As it is the case here...
  return await Token.create({ 
    maxAge:tokenDuration, 
    userId:user.id,
    token, 
  })
}

