/* @fwrlines/generator-graphql-server-type 2.4.5 */
import { ShopController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addShop(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteShop(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateShop(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allShops(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(ShopController.paginated(r, a), c.user)
    },
    getShop(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

