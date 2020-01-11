import { createError } from 'apollo-errors'

export default createError('ConfigurationError', {
  message: 'There is a problem with the current software configuration.'
})

