import { inWaitListController } from '../controllers'
import pm from 'utils/protectedMethod'

const inWaitListResolver = {
  Query:{
    allInWaitList(r, a, c ){
      return pm(inWaitListController.all(r), c.user)
    },
    inWaitList(r, a, c) {
      return inWaitListController.get(r, a, c)
    },
  },
  Mutation: {
    async newInWaitList(r, a, c) {
      return inWaitListController.new(r, a.input, c)
    },
    async addInWaitList(r, a, c) {
      return pm(inWaitListController.add(r, a.input, c), c.user)
    },
    async updateInWaitList(r, a, c) {
      return pm(inWaitListController.update(r, a, c), c.user)
    },
    async deleteInWaitList(r, a, c) {
      return pm(inWaitListController.del(r, a.id, c), c.user)
    },
  }
}

export default [
  inWaitListResolver
]
