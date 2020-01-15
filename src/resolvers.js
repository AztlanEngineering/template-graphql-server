import authResolvers from 'auth/resolvers'
import tstrResolvers from 'tstr/resolvers'
import oauth2Resolvers from 'oauth2/resolvers'

export default [
  ...authResolvers,
  ...tstrResolvers,
  ...oauth2Resolvers
]
