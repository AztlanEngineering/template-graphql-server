import { ConfigurationError } from 'utils'
import jwt from 'jsonwebtoken'
import { Token } from '../models'

const getTokenFor = (User, secret=null) => {
  const payload = {
    id      :User.id,
    username:User.username
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

  const key = secret

  const token = jwt.sign(payload,
    key, {
      issuer   :'Meccamico',
      subject  :User.id,
      audience :'dashboard.meccamico.com',
      expiresIn:Number(process.env.SESSION_DURATION),
      algorithm:'HS512'
    }
    //, (err, token) => {}
  )
  // TODO If we store the tokens, it's to be able to invalidate them.
  // This is currently not implemented. If not we shoud NOT persist JWT's in the DB
  // As it is the case here...
  return new Token({ maxAge: Number(process.env.SESSION_DURATION), token, user: User._id }).save()
}

export default (user) => {
  if (!process.env.JWT_SECRET) {
    throw new ConfigurationError({ message: 'No jwt secret key' })
  }
  return getTokenFor(user, process.env.JWT_SECRET)

}
