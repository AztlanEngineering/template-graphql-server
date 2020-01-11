import { ticketController } from '../controllers'
import pm from 'utils/protectedMethod'

const ticketResolver = {
  Query:{
    allTickets(r, a, c ){
      return pm(ticketController.all(r), c.user)
    },
    ticket(r, a, c) {
      return ticketController.get(r, a, c)
    },
    getTicket(r, a, c) {
      return ticketController.aGet(r, a, c)
    },
    async i(r, a, c, i) {
      console.log('context', c)
      //const cache = new CacheControlExtension({defaultMaxAge: 604765, calculateHttpHeaders: true})
      //console.log(cache)
      //i.cacheControl.setCacheHint = true //cacheControl.setCacheHint

      //i.cacheControl.setCacheHint({ maxAge: 604799 })
      return ticketController.init()
    }
  },
  Mutation: {
    async newTicket(r, a, c) {
      return ticketController.new(r, a.input, c)
    },
    async addTicket(r, a, c) {
      return pm(ticketController.add(r, a.input, c), c.user)
    },
    async updateTicket(r, a, c) {
      return pm(ticketController.update(r, a, c), c.user)
    },
    async deleteTicket(r, a, c) {
      return pm(ticketController.del(r, a.id, c), c.user)
    },
    async starTicket(r, a, c) {
      return pm(ticketController.star(r, a.id, c), c.user)
    }
  }
}

export default [
  ticketResolver
]
