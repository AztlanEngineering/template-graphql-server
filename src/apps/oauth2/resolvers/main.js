/* @fwrlines/generator-graphql-server-type 1.1.2 */
import { GoogleAccessManager } from '../strategies'
import { OAuth2SetterController as MainController } from '../controllers'
/*
import { 
  suMethod as su,
  userMethod as um,
} from 'utils'
*/

export default {
  Mutation:{
    async oAuth2Login(r, a) {
      return await MainController.login(r, a)
    }
  },
  Query:{
    async oAuth2Google(r, a, c) {
      MainController.clean()

      const manager = new GoogleAccessManager()

      return manager.getAuthorizationUri()
    },
    /*
    async oAuth2GoogleForMe(r, a, c) {
      const respond = () => {
        const manager = new GoogleManager()
    
        const setter = await MainController.add(r, { 
          provider: 'google' , userId:c.user.id)
        })

        return manager.getAuthorizationUri(setter.id)// use context if you want to restrict the usage
      }
      return um(respond, c.user)
    }
    */
  }
}

