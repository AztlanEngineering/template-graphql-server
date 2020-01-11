import { operationTicketController } from '../controllers'
import pm from 'utils/protectedMethod'


const operationTicketResolver = {
  Query:{
    allOperationTickets(r, a, c ){
      return pm(operationTicketController.all(r, a, c), c.user)
    },
    operationTicket(r, a, c) {
      return pm(operationTicketController.get(r, a, c), c.user)
    },
  },
  Mutation: {
    async addOperationTicket(r, a, c) {
      return pm(operationTicketController.add(r, a.input, c), c.user)
    },
    async updateOperationTicket(r, a, c) {
      return pm(operationTicketController.update(r, a, c), c.user)
    },
  }
}

export default [
  operationTicketResolver
]
