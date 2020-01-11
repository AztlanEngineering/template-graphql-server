import { serviceController } from '../controllers'
import pm from 'utils/protectedMethod'


const serviceResolver = {
  Query: {
    allServices(r, a, c) {
      return pm(serviceController.all(r), c.user)
    },
    service(r, a, c) {
      return serviceController.get(r, a, c)
    },
  },
  Mutation: {
    addService(r, a, c) {
      return pm(serviceController.add(r, a.input, c), c.user)
    },
    async updateService(r, a, c) {
      return pm(serviceController.update(r, a, c), c.user)
    },
    async deleteService(r, a, c) {
      return pm(serviceController.del(r, a.id, c), c.user)
    },
    async activateService(r, a, c) {
      return pm(serviceController.activate(r, a.id, c), c.user)
    },
    async activateCar(r, a, c) {
      return pm(serviceController.activateCar(r, a.id, c), c.user)
    },
    async activateMotorcycle(r, a, c) {
      return pm(serviceController.activateMotorcycle(r, a.id, c), c.user)
    }
  }
}

export default [
  serviceResolver
]
