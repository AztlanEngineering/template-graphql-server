import { mechanicController } from '../controllers'
import pm from 'utils/protectedMethod'


const mechanicResolver = {
  Query: {
    allMechanics(r, a, c) {
      return pm(mechanicController.all(r), c.user)
    },
    mechanic(r, a, c) {
      return mechanicController.get(r, a, c)
    },
  },
  Mutation: {
    addMechanic(r, a, c) {
      return pm(mechanicController.add(r, a.input, c), c.user)
    },
    async updateMechanic(r, a, c) {
      return pm(mechanicController.update(r, a, c), c.user)
    },
    async deleteMechanic(r, a, c) {
      return pm(mechanicController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  mechanicResolver
]
