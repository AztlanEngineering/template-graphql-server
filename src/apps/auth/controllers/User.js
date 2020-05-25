/* @fwrlines/generator-graphql-server-type 1.3.1 */
import models from 'models'

//import { getTokenFor } from '../utils'

import {
  ConfigurationError,
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'

import bcrypt from 'bcrypt'

import {
  validateSignupInput ,
  validateLoginInput
} from '../validation'

const Model = models.User


/*
import {
  ConfigurationError,ad 
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'
*/
const Controller = {
  all:(root, args) => Model.findAll({}),

  get:(root, { id }) => Model.findByPk( id ),

  add:async (root, { input }) => await Model.create( input ),

  delete:async (root, { id }) => {
    const item = await Model.findByPk(id).catch(e => {
      console.log(e.message)
    })
    if (!item) {
      return false
    }
    await item.destroy()
    return item.id
  },

  update:async (root, { input, id }) => {
    const updated = await Model.update(input, {
      where:{
        id
      },
      returning:true
    }).catch(
      e => console.log(e.message)
    )
    return updated[1][0] //we return the first updated item
  },

  setSuperuser:async (root, {id, value}, context) => {
    const item = await Model.findByPk(id)
    item.superuser = value
    await item.save()
    return true
  },

  setUserPassword:async (root, { id, value }, context) => {
    const item = await Model.findByPk(id)
    await item.setPassword(value)
    return true
  },

  signup:async (root, args, context) => {
    const { errors, isValid } = await validateSignupInput(args)

    if (!isValid) {
      console.log(errors)
      throw new ValidationError({ data: errors })
    }
    
    const { 
      password,
      ...creationArgs
    } = args
    const item = await Model.create(creationArgs)
    await item.setPassword(password)

    return item.getAuthToken()
  },

  login:async (root, args, context) => {
    const { errors, isValid } = validateLoginInput(args)

    if (!isValid) {
      throw new ValidationError({ data: errors })
    }

    const { 
      email:rawEmail,
      password
    } = args

    const email = rawEmail.toLowerCase()

    const item = await Model.findOne({ where: { email }})

    if (item) {
      if (await item.isPasswordValid(password)) {
        //TODO add more login here, for instance if the account is valid
        return await item.getAuthToken()
      }
      
      throw new ValidationError({ message: 'Incorrect credentials' }) //Incorrect pwd
      //return res.status(400).json(errors)
      
    }
    
    throw new ValidationError({ message: 'Incorrect credentials' }) //User not found
    
  },

  updateMe:async (root, { input }, context) => {
    const updated = await Model.update(input, {
      where:{
        id:context.user.id
      },
      returning:true
    }).catch(
      e => console.log(e.message)
    )
    return updated[1][0] //we return the first updated item
  },

  setMyPassword:async (root, { oldPassword, newPassword }, context) => {
    const item = await Model.findByPk( context.user.id )
    const canChangePassword = (item.passwordHash && await item.isPasswordValid(oldPassword)) || !item.passwordHash
    if(canChangePassword) {
      await item.setPassword(newPassword)
      return true
    }
    return false
  },

  /*
  me:async(root, args, context) => {
    //console.log('me function called, r, a ,c', root, args, context)
  }
  */
}

export default Controller

