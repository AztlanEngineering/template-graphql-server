import { userController } from '../controllers'
//import { AuthenticationError } from 'apollo-server'
import pm from 'utils/protectedMethod'

const userResolver = {
  Mutation: {
    addUser(r, a, c) {
      return pm(userController.add(r, a.input), c.user)
    },
    async deleteUser(r, a, c) {
      return pm(userController.del(r, a.id), c.user)
    },
    async updateUser(r, a, c) {
      return pm(userController.update(r, a), c.user)
    },
    async changePassword(r, a, c) {
      //add further protection
      return pm(userController.changePassword(r, a, c), c.user)
    },
    async changeMyPassword(r, a, c) {
      return pm(userController.changeMyPassword(r, a, c), c.user)
    },
    async updateMe(r, a, c) {
      return pm(userController.updateMe(r, a, c), c.user)
    },
    async login(root, args) {
      return userController.login(root, args.input)
    },
    async signup(root, args, context) {
      return process.ENV.SIGNUP === 'true' ?
        userController.signup(root, args.input, context) :
        { token:'none', duration:'none' }
    }
  },
  Query: {
    allUsers(r, a, c) {
      // use context if you want to restrict the usage
      return pm(userController.users(r, a), c.user)
    },
    me(root, args, context) {
      console.log('👽 in the resolver', context)
      return context.user
    }
  }
}

export default [
  userResolver
]
