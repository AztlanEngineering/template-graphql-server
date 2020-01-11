import { makeController } from '../controllers'
import pm from 'utils/protectedMethod'


const makeResolver = {
  Query: {
    allMakes(r, a, c) {
      return pm(makeController.all(r), c.user)
    },
    commonMakes(r, a, c) {
      return makeController.common(r, a, c)
    },
    make(r, a, c) {
      return makeController.get(r, a, c)
    },
  },
  Mutation: {
    addMake(r, a, c) {
      return pm(makeController.add(r, a.input, c), c.user)
    },
    async updateMake(r, a, c) {
      return pm(makeController.update(r, a, c), c.user)
    },
    async deleteMake(r, a, c) {
      return pm(makeController.del(r, a.id, c), c.user)
    },
    async activateMake(r, a, c) {
      return pm(makeController.activate(r, a.id, c), c.user)
    },
    async activateMakeCar(r, a, c) {
      return pm(makeController.activateCar(r, a.id, c), c.user)
    },
    async activateMakeMotorcycle(r, a, c) {
      return pm(makeController.activateMotorcycle(r, a.id, c), c.user)
    }
  }
}

export default [
  makeResolver
]
