import authResolvers from 'auth/resolvers'
import carResolvers from 'car/resolvers'
import ticketResolvers from 'ticket/resolvers'
import blogResolvers from 'blog/resolvers'
import contactResolvers from 'contact/resolvers'
import mktResolvers from 'mkt/resolvers'

export default [
  ...authResolvers,
  ...carResolvers,
  ...ticketResolvers,
  ...blogResolvers,
  ...contactResolvers,
  ...mktResolvers
]
