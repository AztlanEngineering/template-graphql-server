/* @fwrlines/generator-graphql-server-type 1.1.1 */
import { suMethod as su } from 'utils'

export default {
  Mutation:{
  },
  Query:{
    getSimpleHello(r, a, c) {
      // use context if you want to restrict the usage
      return "Hello ! This is a sample string returned by the api server"
      //return su(MainController.get(r, a), c.user)
    },
    getHello(r, a, c) {
      // use context if you want to restrict the usage
      return {y: "mini hello"}
      //return su(MainController.get(r, a), c.user)
    }
  }
}

