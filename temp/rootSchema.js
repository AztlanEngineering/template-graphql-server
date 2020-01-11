import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
  mergeSchemas,
} from 'graphql-tools'
// TODO Use or cleanup

import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'

import user from 'auth/schemas/user.graphql'
import token from 'auth/schemas/token.graphql'

import make from 'car/schemas/make.graphql'
import model from 'car/schemas/model.graphql'

import ticket from 'ticket/schemas/ticket.graphql'
import meeting from 'ticket/schemas/meeting.graphql'
import mechanic from 'ticket/schemas/mechanic.graphql'
import customer from 'ticket/schemas/customer.graphql'
import service from 'ticket/schemas/service.graphql'
import log from 'ticket/schemas/log.graphql'
import operationTicket from 'ticket/schemas/operationTicket.graphql'

import post from 'blog/schemas/post.graphql'
import postCategory from 'blog/schemas/postCategory.graphql'

import contact from 'contact/schemas/contact.graphql'

import inWaitList from 'mkt/schemas/inWaitList.graphql'
import marketingText from 'mkt/schemas/marketingText.graphql'

import stitchBlog from 'blog/schemas/_stitch.graphql'
import stitchTicket from 'ticket/schemas/_stitch.graphql'
import stitchAuth from 'auth/schemas/_stitch.graphql'

import resolvers from 'rootResolver'

export default makeExecutableSchema({
  typeDefs: [
    query,
    mutation,
    user,
    token,
    make,
    model,
    ticket,
    meeting,
    mechanic,
    customer,
    service,
    log,
    operationTicket,
    post,
    postCategory,
    contact,
    inWaitList,
    marketingText,
    stitchBlog,
    stitchTicket,
    stitchAuth
  ],
  resolvers: resolvers
})

