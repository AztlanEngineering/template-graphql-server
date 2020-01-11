import { customerController } from '../controllers'
import pm from 'utils/protectedMethod'


const customerResolver = {
  Query:{
    allCustomers(r, a, c ){
      return pm(customerController.all(r), c.user)
    },
    customer(r, a, c) {
      return customerController.get(r, a, c)
    },
  },
  Mutation: {
    async addCustomer(r, a, c) {
      return pm(customerController.add(r, a.input, c), c.user)
    },
    async updateCustomer(r, a, c) {
      return pm(customerController.update(r, a, c), c.user)
    },
    async deleteCustomer(r, a, c) {
      return pm(customerController.del(r, a.id, c), c.user)
    }
  }
}

export default [
  customerResolver
]

