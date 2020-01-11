import { Mechanic } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const mechanicController = {
  all: (r, a, c) => Mechanic.find({}),
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await Mechanic.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Mechanic.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newMech = new Mechanic(args)
    newMech.mobile_phone = Number(newMech.mobile_phone)
    newMech.shop_phone = Number(newMech.shop_phone)
    return newMech.save()

  },
	 update: async (root, args) => {
    const tempMech = { ...args.input }
		 tempMech.mobile_phone = Number(tempMech.mobile_phone) // Converting floats to int
    tempMech.shop_phone = Number(tempMech.shop_phone)
    tempMech.ts_updated = Date.now()
    const updatedMechanic = await Mechanic.findByIdAndUpdate(
      args.id,
      { $set: tempMech },
    )
    if (!updatedMechanic){
      throw new ObjectNotFoundError()
    } else {
      return updatedMechanic
    }
  },
}

export { mechanicController }
