import ticketResolver from './resolvers/ticket'
import meetingResolver from './resolvers/meeting'
import mechanicResolver from './resolvers/mechanic'
import customerResolver from './resolvers/customer'
import serviceResolver from './resolvers/service'
import operationTicketResolver from './resolvers/operationTicket'
import logResolver from './resolvers/log'

export default [
  ...ticketResolver,
  ...meetingResolver,
  ...mechanicResolver,
  ...customerResolver,
  ...serviceResolver,
  ...operationTicketResolver,
  ...logResolver
]

