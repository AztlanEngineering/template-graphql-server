/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { SiteController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addSite(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteSite(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateSite(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allSites(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(SiteController.paginated(r, a), c.user)
    },
    getSite(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

