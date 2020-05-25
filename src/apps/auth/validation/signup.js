import V from 'validator'
import { isEmpty } from 'utils'

const models = import('models')
const Model = models.User

export default async(d) => {
  let e = {}
  d.lastName = !isEmpty(d.lastName) ? d.lastName : ''
  d.username = !isEmpty(d.username) ? d.username : ''
  d.firstName = !isEmpty(d.firstName) ? d.firstName : ''
  d.email = !isEmpty(d.email) ? d.email : ''
  d.password = !isEmpty(d.password) ? d.password : ''
  // d.password_confirm = !isEmpty(d.password_confirm) ? d.password_confirm : ''
  //

  if (!V.isLength(d.firstName, { min: 2, max: 30 })) {
    e.firstName = 'First name must be between 2 to 30 chars'
  }

  if (V.isEmpty(d.lastName)) {
    e.lastName = 'Last name field is required'
  }

  if (V.isEmpty(d.firstName)) {
    e.firstName = 'First name field is required'
  }

  if (V.isEmpty(d.username)) {
    e.username = 'Username field is required'
  }

  if (!V.isEmpty(d.username)) {

    const username_exists = await Model.findOne({ 
      where:{
        email:d.username
      }
    })

    if (username_exists) {
      e.username = 'Username already exists'
    }
  }

  if (!V.isEmail(d.email)) {
    e.email = 'Email is invalid'
  }

  if (V.isEmpty(d.email)) {
    e.email = 'Email is required'
  }

  if (V.isEmail(d.email) && !V.isEmpty(d.email) ) {

    const email_exists = await Model.findOne({ 
      where:{
        email:d.email
      }
    })

    if (email_exists) {
      e.email = 'Email already exists'
    }
  }

  if (!V.isLength(d.password, { min: 6, max: 30 })) {
    e.password = 'Password must have 6 chars'
  }

  if (V.isEmpty(d.password)) {
    e.password = 'Password is required'
  }

  // if(!V.isLength(d.password_confirm, {min: 6, max: 30})) {
  // e.password_confirm = 'Password must have 6 chars'
  // }

  // if(!V.equals(d.password, d.password_confirm)) {
  // e.password_confirm = 'Password and Confirm Password must match'
  // }

  // if(V.isEmpty(d.password_confirm)) {
  // e.password_confirm = 'Password is required'
  // }

  return {
    errors :e,
    isValid:isEmpty(e)
  }
}
