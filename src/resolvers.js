import authResolvers from 'auth/resolvers'
import oauth2Resolvers from 'oauth2/resolvers'

//import tstrResolvers from 'tstr/resolvers'
import businessResolvers from 'business/resolvers'
import carResolvers from 'car/resolvers'
import dictionaryResolvers from 'dictionary/resolvers'
import websiteResolvers from 'website/resolvers'

export default [
  ...authResolvers,
  ...oauth2Resolvers,
  //...tstrResolvers,

  ...businessResolvers,
  ...carResolvers,
  ...dictionaryResolvers,
  ...websiteResolvers
]
