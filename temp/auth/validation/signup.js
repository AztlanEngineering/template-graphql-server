import Validator from 'validator'
import isEmpty from 'utils/isEmpty'

export default function validateSignupInput(data) {
  let errors = {}
  data.last_name = !isEmpty(data.last_name) ? data.last_name : ''
  data.username = !isEmpty(data.username) ? data.username : ''
  data.first_name = !isEmpty(data.first_name) ? data.first_name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.password = !isEmpty(data.password) ? data.password : ''
  // data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : ''

  if(!Validator.isLength(data.first_name, { min: 2, max: 30 })) {
    errors.first_name = 'First name must be between 2 to 30 chars'
  }

  if(Validator.isEmpty(data.last_name)) {
    errors.last_name = 'Last name field is required'
  }

  if(Validator.isEmpty(data.first_name)) {
    errors.first_name = 'First name field is required'
  }

  if(Validator.isEmpty(data.username)) {
    errors.username = 'Username field is required'
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required'
  }

  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must have 6 chars'
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required'
  }

  // if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
  // errors.password_confirm = 'Password must have 6 chars'
  // }

  // if(!Validator.equals(data.password, data.password_confirm)) {
  // errors.password_confirm = 'Password and Confirm Password must match'
  // }

  // if(Validator.isEmpty(data.password_confirm)) {
  // errors.password_confirm = 'Password is required'
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
