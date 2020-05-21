/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { PageController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addPage(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deletePage(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updatePage(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allPages(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(PageController.paginated(r, a), c.user)
    },
    getPage(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

