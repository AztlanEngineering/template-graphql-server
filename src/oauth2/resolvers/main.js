/* @fwrlines/generator-graphql-server-type 1.1.2 */
import { GoogleManager } from '../providers'
import { SetterController as MainController } from '../controllers'
//import { suMethod as su } from 'utils'

export default {
  Mutation:{
  },
  Query:{
    oAuth2Login(r, a, c) {
      return 'blah'
    },
    async oAuth2Google(r, a, c) {
      const GoogleMgr = GoogleManager()
      // use context if you want to restrict the usage
      //
      // Use a setter to add a setter from the current user (that's why we pass context)
      const setter = await MainController.addSetter(r, { provider: 'google' }, c)

      //const setter ={ _id: null }
      return GoogleMgr.getAuthorizationUri(setter._id)// use context if you want to restrict the usage
      //return su(MainController.get(r, a), c.user)
    }
  }
}

