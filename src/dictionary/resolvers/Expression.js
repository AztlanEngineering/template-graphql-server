/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { ExpressionController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addDictionaryExpression(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteDictionaryExpression(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateDictionaryExpression(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allDictionaryExpressions(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(DictionaryExpressionController.paginated(r, a), c.user)
    },
    getDictionaryExpression(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

