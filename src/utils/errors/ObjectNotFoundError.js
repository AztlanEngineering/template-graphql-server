import { createError } from 'apollo-errors'
const PUBLIC_ERROR_OPTIONS = {
  showPath:false,
  showLocations:false
}

export default createError('ObjectNotFoundError', {
  message: 'Object not found',
  options:PUBLIC_ERROR_OPTIONS
})
