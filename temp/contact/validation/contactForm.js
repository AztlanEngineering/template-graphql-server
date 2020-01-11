import Validator from 'validator'
import isEmpty from 'utils/isEmpty'

export default function validateContactForm(data) {
  let errors = {}
  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email : ''
  data.topic = !isEmpty(data.topic) ? data.topic : ''
  data.message = !isEmpty(data.message) ? data.message : ''

  if(Validator.isEmpty(data.name) || data.name <= 4) {
    // !! Field Name != DB  model name
    errors.first_name = 'The first name must be > 4'
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is not valid'
  }

  if(Validator.isEmpty(data.topic)) {
    errors.topic = 'Please choose a topic'
  }

  if(Validator.isEmpty(data.message) || data.message <= 20) {
    errors.message = 'The message must be > 20'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

//TODO Aadd model validation
