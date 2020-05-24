/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { TagController as MainController } from '../controllers'
import { suMethod as su } from 'utils'

export default {
  Mutation:{
    async addDictionaryTag(r, a, c) {
      return su(MainController.add(r, a), c.user)
    },
    async deleteDictionaryTag(r, a, c) {
      return su(MainController.del(r, a), c.user)
    },
    async updateDictionaryTag(r, a, c) {
      return su(MainController.update(r, a), c.user)
    }
  },
  Query:{
    allDictionaryTags(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.all(r, a), c.user)
      //return su(DictionaryTagController.paginated(r, a), c.user)
    },
    getDictionaryTag(r, a, c) {
      // use context if you want to restrict the usage
      return su(MainController.get(r, a), c.user)
    }
  }
}

