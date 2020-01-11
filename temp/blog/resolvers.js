import postCategoryResolvers from './resolvers/postCategory'
import postResolvers from './resolvers/post'

export default [
  ...postResolvers,
  ...postCategoryResolvers,
]

