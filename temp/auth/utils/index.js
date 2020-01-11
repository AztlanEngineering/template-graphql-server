import fs from 'fs'
import jwt from 'jsonwebtoken'
import { Token } from '../models'

function getTokenFor(User, secret=null) {
  const payload = {
    id: User.id,
    username: User.username,
    //user_agent: context.user_agent
  }
  const duration = 86400
  const algorithm = secret ? 'HS512' : 'RS256'
  var key = null
  if (algorithm === 'HS512') {
    key = secret
  } else {
    key = ''
    //key = fs.readFileSync('./keys/jwt_private.pem', 'utf-8')
  }
  const token_value = jwt.sign(payload,
    key, {
      issuer:  'Meccamico',
      subject:  User.id,
      audience:  'dashboard.meccamico.com',
      expiresIn: duration, //TODO Make modular
      algorithm: algorithm,
    }
    //, (err, token) => {}
  )
  // TODO If we store the tokens, it's to be able to invalidate them.
  // This is currently not implemented. If not we shoud NOT persist JWT's in the DB
  // As it is the case here...
  const token = new Token({duration:duration, token:token_value, user:User._id}).save()
  return token
}

export { getTokenFor }
