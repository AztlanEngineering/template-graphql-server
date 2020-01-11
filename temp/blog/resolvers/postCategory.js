import { postController, postCategoryController } from '../controllers'
import pm from 'utils/protectedMethod'

const postCategoryResolver = {
  Query: {
    allPostCategories(r, a, c) {
      return pm(postCategoryController.all(r), c.user)
    },
    postCategories(r, a, c) {
      return postCategoryController.postCategories(r, a, c)
    },
    postCategory(r, a, c) {
      return postCategoryController.get(r, a, c)
    },
  },
  PostCategory: {
    posts(r, a, c) {
      return postController.postsByCategory(r, { page:1, category:r.slug, ...a }, c)
    },
  },
  Mutation: {
    addPostCategory(r, a, c) {
      return pm(postCategoryController.add(r, a.input, c), c.user)
    },
    async updatePostCategory(r, a, c) {
      return pm(postCategoryController.update(r, a, c), c.user)
    },
    async deletePostCategory(r, a, c) {
      return pm(postCategoryController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  postCategoryResolver
]
