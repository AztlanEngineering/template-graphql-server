import { createError } from 'apollo-errors'
// const MONGOOSE_ERROR = 'MONGOOSE_ERROR'
const PUBLIC_ERROR_OPTIONS = {
  showPath:false,
  showLocations:false
}

const ValidationError = createError('ValidationError', {
  message: 'The provided data is not valid.'
})

const NotUniqueError = createError('NotUniqueError', {
  message: 'One of the required fields should be unique'
})

const ObjectNotFoundError = createError('ObjectNotFoundError', {
  message: 'Object not found',
  options:PUBLIC_ERROR_OPTIONS
})

export {
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
}
