import Validator from 'validator'
import isEmpty from 'utils/isEmpty'

export default function validateTicketCreator(data) {
  let errors = {}
  console.log('Inside the validation function', data)
  data.make = !isEmpty(data.make) ? data.make : ''
  data.mobile_phone = !isEmpty(data.mobile_phone) ? data.mobile_phone : ''
  data.mobile_phone.charAt(0) == '0' ?
    data.mobile_phone = data.mobile_phone.slice(1) :
    void(0)
  data.whatsapp = !isEmpty(String(data.whatsapp)) ? String(data.whatsapp) : ''
  data.motorcycle = !isEmpty(String(data.motorcycle)) ? String(data.motorcycle) : ''
  data.postcode = !isEmpty(data.postcode) ? String(data.postcode) : ''
  isEmpty(data.problem_category) ?
    errors.service = 'Please select the services your car requires.' :
    void(0)

  if(Validator.isEmpty(data.postcode)) {
    errors.postcode = 'Please enter your postcode'
  }

  if(Validator.isEmpty(data.first_name) || data.first_name.length <= 2) {
    // !! Field Name != DB  model name
    errors.first_name = 'The first name must be >2'
  }

  if(Validator.isEmpty(data.last_name) || data.last_name.length <= 2) {
    // !! Field Name != DB  model name
    errors.last_name = 'What is your last name?'
  }

  if(data.preferred_time.length != 1) {
    errors.preferred_time = 'Error'
  }

  if(data.km.length != 1) {
    errors.km = 'Error'
  }

  if(Validator.isEmpty(data.mobile_phone)) {
    // !! Field Name != DB  model name
    errors.mobile_phone = 'A phone number is required'
  }

  if(Validator.isEmpty(data.make)) {
    errors.manufacturer = 'What is the manufacturer of your car ?'
  }

  if(!Validator.isLength(data.postcode, {min: 5, max: 5})) {
    errors.postcode = 'Is the postcode correct ?'
  }

  if(!Validator.isMobilePhone(data.mobile_phone, 'it-IT')) {
    // !! Field Name != DB  model name
    errors.mobile_phone = 'Please ensure you entered your phone number correctly'
  }

  if(!Validator.isMongoId(data.make)) {
    errors.manufacturer = 'What is the manufacturer of your car ?'
  }

  // !! Field Name != DB  model name
  !Validator.isMongoId(data.problem_category) ?
    errors.service = 'Please select the services your car requires.':
    void(0)

  if(!Validator.isBoolean(data.whatsapp)) {
    errors.whatsapp = 'Error'
  }

  if(!Validator.isBoolean(data.motorcycle)) {
    errors.whatsapp = 'Error'
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

//TODO Aadd model validation
