import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'

import authTypes from 'auth/types'

const baseTypes = [
  query,
  mutation
]

export default [
  ...baseTypes,
  ...authTypes
]
