/* @fwrlines/generator-graphql-server-type 1.1.1 */
import { suMethod as su } from 'utils'

export default {
  Mutation:{
  },
  Query:{
    getHello(r, a, c) {
      // use context if you want to restrict the usage
      return {y:"mini hello"}
      //return su(MainController.get(r, a), c.user)
    }
  }
}
