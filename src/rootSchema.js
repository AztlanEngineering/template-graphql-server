import {
  makeExecutableSchema
} from 'graphql-tools'

//import typeDefs from './typeDefs'
//import resolvers from './resolvers'

import { typeDefs, resolvers } from 'loadSchema'

export default makeExecutableSchema({
  typeDefs,
  resolvers
})

