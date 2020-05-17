/* @fwrlines/generator-graphql-server-type 1.3.0 */
import { MakeController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    addMake(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteMake(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateMake(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allMakes(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(MakeController.paginated(r, a), c.user)
    },
    getMake(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

