import { Make } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const makeController = {
  all: (r, a, c) => Make.find({}),
  common: (r) => Make.find({'is_common':true}),
  get: (r, a, c) => '',

  del: async(r, id, c) => {

    console.log('DELETING', id)
    await Make.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Make.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newMake = new Make(args)
    return newMake.save()

  },
	 update: async (root, args) => {
    const tempMake = { ...args.input }
    const updatedMake = await Make.findByIdAndUpdate(
      args.id,
      { $set: tempMake },
    )
    if (!updatedMake){
      throw new ObjectNotFoundError()
    } else {
      return updatedMake
    }
  },

  activate: async (root, i) => {
    var tempMake = await Make.findOne({ _id:i})
    tempMake.is_active = !tempMake.is_active
    tempMake.save()
    return tempMake.is_active
  },
  activateCar: async (root, i) => {
    var tempMake = await Make.findOne({ _id:i})
    tempMake.car = !tempMake.car
    tempMake.save()
    return tempMake.car
  },
  activateMotorcycle: async (root, i) => {
    var tempMake = await Make.findOne({ _id:i})
    tempMake.motorcycle = !tempMake.motorcycle
    tempMake.save()
    return tempMake.motorcycle
  }
}

export { makeController }
