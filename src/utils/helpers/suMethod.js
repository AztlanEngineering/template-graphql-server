import { AuthenticationError } from 'apollo-server'
function suMethod(method, user){
  if (!user){
    throw new AuthenticationError()
  } else {
    return method
  }
}

export default suMethod
