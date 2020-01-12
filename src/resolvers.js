import authResolvers from 'auth/resolvers'
import tstrResolvers from 'tstr/resolvers'

export default [
  ...authResolvers,
  ...tstrResolvers
]
