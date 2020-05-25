/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { AuthorController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addDictionaryAuthor(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteDictionaryAuthor(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateDictionaryAuthor(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allDictionaryAuthors(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(DictionaryAuthorController.paginated(r, a), c.user)
    },
    getDictionaryAuthor(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

