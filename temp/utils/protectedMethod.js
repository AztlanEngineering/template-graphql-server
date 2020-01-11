import { AuthenticationError } from 'apollo-server'
function protectedMethod(method, user){
  if (!user){
    throw new AuthenticationError()
  } else {
    return method
  }
}

export default protectedMethod
