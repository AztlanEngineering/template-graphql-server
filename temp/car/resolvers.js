import makeResolver from './resolvers/make'
import modelResolver from './resolvers/model'

export default [
  ...modelResolver,
  ...makeResolver
]

