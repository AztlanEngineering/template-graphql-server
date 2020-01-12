import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'

import authTypes from 'auth/types'
import tstrTypes from 'tstr/types'

const baseTypes = [
  query,
  mutation
]

export default [
  ...baseTypes,
  ...authTypes,
  ...tstrTypes
]
