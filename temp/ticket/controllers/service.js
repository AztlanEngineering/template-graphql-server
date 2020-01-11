import { Service } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const serviceController = {
  all: (r, a, c) => Service.find({}),
  get: (r, a, c) => '',

  del: async(r, id, c) => {

    console.log('DELETING', id)
    await Service.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Service.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newService = new Service(args)
    return newService.save()

  },
	 update: async (root, args) => {
    const tempService = { ...args.input }
    const updatedService = await Service.findByIdAndUpdate(
      args.id,
      { $set: tempService },
    )
    if (!updatedService){
      throw new ObjectNotFoundError()
    } else {
      return updatedService
    }
  },

  activate: async (root, i) => {
    var tempService = await Service.findOne({ _id:i})
    tempService.is_active = !tempService.is_active
    tempService.save()
    return tempService.is_active
  },
  activateCar: async (root, i) => {
    var tempService = await Service.findOne({ _id:i})
    tempService.car = !tempService.car
    tempService.save()
    return tempService.car
  },
  activateMotorcycle: async (root, i) => {
    var tempService = await Service.findOne({ _id:i})
    tempService.motorcycle = !tempService.motorcycle
    tempService.save()
    return tempService.motorcycle
  }
}

export { serviceController }
