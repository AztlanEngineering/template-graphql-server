import { AuthenticationError } from 'apollo-server'
export default(method, user) => {
  //if (!user){
  if (!user || !user.id){
    throw new AuthenticationError({
      code   :'not_authenticated',
      message:'Authentication Required'
    })
  }
  else {
    return method
  }
}
