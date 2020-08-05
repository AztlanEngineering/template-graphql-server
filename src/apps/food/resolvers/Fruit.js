/* @fwrlines/generator-graphql-server-type 2.8.1 */
import { FruitController as MainController } from '../controllers'
import { 
  suMethod as su, 
  userMethod as um 
} from 'utils'

export default {
  Mutation:{
    async addFruit(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteFruit(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateFruit(r, a, c) {
      return su(MainController.update(r, a), c.user)
    },
    /*
    async addMyFruit(r, a, c) {
      return li(MainController.addMine(r, a), c.user)
    },
    async deleteMyFruit(r, a, c) {
      return li(MainController.deleteMine(r, a), c.user)
    },
    async updateMyFruit(r, a, c) {
      return li(MainController.updateMine(r, a), c.user)
    },
    */
  },
  Query:{
    allFruits(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(FruitController.paginated(r, a), c.user)
    },
    getFruit(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    },
    /*
    allMyFruits(r, a, c) {
      // use context if you want to restrict the usage
      return li(MainController.allMine(r, a), c.user)
    },
    getMyFruit(r, a, c) {
      // use context if you want to restrict the usage
      return li(MainController.getMine(r, a), c.user)
    }
    */
  }
}

