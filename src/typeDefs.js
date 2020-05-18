import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'

import authTypes from 'auth/types'
import tstrTypes from 'tstr/types'
import oauth2Types from 'oauth2/types'
import carTypes from 'car/types'

const baseTypes = [
  query,
  mutation
]

export default [
  ...baseTypes,
  ...authTypes,
  ...tstrTypes,
  ...oauth2Types,
  ...carTypes
]
