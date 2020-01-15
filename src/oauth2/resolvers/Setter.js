/* @fwrlines/generator-graphql-server-type 1.1.1 */
import { SetterController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    addSetter(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteSetter(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateSetter(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allSetters(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(SetterController.paginated(r, a), c.user)
    },
    getSetter(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

