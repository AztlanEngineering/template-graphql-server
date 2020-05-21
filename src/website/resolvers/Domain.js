/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { DomainController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addDomain(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteDomain(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateDomain(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allDomains(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(DomainController.paginated(r, a), c.user)
    },
    getDomain(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

