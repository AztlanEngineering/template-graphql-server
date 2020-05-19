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
  ConfigurationError,
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
    item.destroy()
    return true
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

  signup:async (root, args, context) => {
    const { errors, isValid } = validateSignupInput(args)

    if (!isValid) {
      throw new ValidationError({ data: errors })
    }
    const email_exists = await Model.findOne({ 
      where:{
        email:args.email
      }
    })

    if (email_exists) {
      throw new NotUniqueError({ message: 'email already exists', data: { email: 'email already exists' } })
    }

    else {
      const { 
        password,
        ...creationArgs
      } = args
      const item = await Model.create(creationArgs)
      await item.setPassword(password)

      return item.getAuthToken()
    }
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
        return await item.getAuthToken()
      }
      
      return new ValidationError({ message: 'Incorrect credentials' }) //Incorrect pwd
      //return res.status(400).json(errors)
      
    }
    
    return new ValidationError({ message: 'Incorrect credentials' }) //User not found
    
  },

  setSuperuser:async (root, {id, value}, context) => {
    const item = await Model.findByPk(id)
    item.superuser = value
    await item.save()
    return true
  },

  setMyPassword:async (root, { oldPassword, newPassword }, context) => {
    const item = await Model.findByPk( context.user.id )
    const canChangePassword = (item.password_hash && await item.isPasswordValid(oldPassword)) || !item.password_hash
    if(canChangePassword) {
      await item.setPassword(newPassword)
      return true
    }
    return false
  },

  setUserPassword:async (root, { id, value }, context) => {
    const item = await Model.findByPk(id)
    await item.setPassword(value)
    return true
  }

  /*
  me:async(root, args, context) => {
    //console.log('me function called, r, a ,c', root, args, context)
  }
  */
}

export default Controller


/*
const userController = {
  changePassword:async(r, a) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(a.password, salt)
    const updatedUser = await User.findByIdAndUpdate(
      a.id,
      { password: hash },
    )
    if (!updatedUser){
      throw new ObjectNotFoundError()
    }
    else {
      return true
    }
  },

  changeMyPassword:async(r, a, c) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(a.password, salt)
    const updatedUser = await User.findByIdAndUpdate(
      c.user.id,
      { password: hash },
    )
    if (!updatedUser){
      throw new ObjectNotFoundError()
    }
    else {
      return true
    }
  },

	 updateMe:async (r, a, c) => {
    const tempUser = { ...a.input }
    tempUser.ts_updated = Date.now()
    const updatedUser = await User.findByIdAndUpdate(
      c.user.id,
      { $set: tempUser },
    )
    if (!updatedUser){
      throw new ObjectNotFoundError()
    }
    else {
      return updatedUser
    }
  },

	 update:async (root, args) => {
    const tempUser = { ...args.input }
    tempUser.ts_updated = Date.now()
    const updatedUser = await User.findByIdAndUpdate(
      args.id,
      { $set: tempUser },
    )
    if (!updatedUser){
      throw new ObjectNotFoundError()
    }
    else {
      return updatedUser
    }
  },

  users:(root, args) => User.find({}),

  user:(token) => User.find({ token }),


}

export default userController
  */
