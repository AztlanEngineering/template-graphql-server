/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { TokenController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addToken(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteToken(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateToken(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allTokens(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(TokenController.paginated(r, a), c.user)
    },
    getToken(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

