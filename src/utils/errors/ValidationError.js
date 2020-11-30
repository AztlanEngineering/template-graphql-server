import { createError } from 'apollo-errors'

export default createError('ValidationError', {
  message: 'The provided data is not valid.',
})

