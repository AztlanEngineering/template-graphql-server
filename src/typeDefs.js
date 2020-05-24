import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'

import authTypes from 'auth/types'
import oauth2Types from 'oauth2/types'
//import tstrTypes from 'tstr/types'

import businessTypes from 'business/types'
import carTypes from 'car/types'
import dictionaryTypes from 'dictionary/types'
import websiteTypes from 'website/types'

const baseTypes = [
  query,
  mutation
]

export default [
  ...baseTypes,

  ...authTypes,
  ...oauth2Types,
  //...tstrTypes,

  ...businessTypes,
  ...carTypes,
  ...dictionaryTypes,
  ...websiteTypes
]
