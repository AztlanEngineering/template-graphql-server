import { postController } from '../controllers'
import pm from 'utils/protectedMethod'


const postResolver = {
  Query: {
    allPosts(r, a, c) {
      return postController.all(r)
    },
    posts(r, a, c) {
      return postController.posts(r, a, c)
    },
    post(r, a, c) {
      return postController.get(r, a.id, c)
    },
    postBySlug(r, a, c) {
      return postController.getBySlug(r, a.slug, c)
    },
  },
  Mutation: {
    addPost(r, a, c) {
      return pm(postController.add(r, a.input, c), c.user)
    },
    async updatePost(r, a, c) {
      return pm(postController.update(r, a, c), c.user)
    },
    async deletePost(r, a, c) {
      return pm(postController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  postResolver
]
