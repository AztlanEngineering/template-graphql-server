import { createError } from 'apollo-errors'

export default createError('NotUniqueError', {
  message:'One of the required fields should be unique'
})
