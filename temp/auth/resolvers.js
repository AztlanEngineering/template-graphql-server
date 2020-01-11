import helloResolver from './resolvers/hello'
import userResolver from './resolvers/user'

export default [
  ...helloResolver,
  ...userResolver
]
