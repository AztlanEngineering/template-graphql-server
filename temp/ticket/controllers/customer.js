import { Customer } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const customerController = {
  all: (r, a, c) => Customer.find({}),
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await Customer.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Customer.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newCustomer = new Customer(args)
    newCustomer.mobile_phone = Number(newCustomer.mobile_phone)
    newCustomer.shop_phone = Number(newCustomer.shop_phone)
    newCustomer.ts_updated = Date.now()
    return newCustomer.save()

  },
	 update: async (root, args) => {
    const tempCustomer = { ...args.input }
    tempCustomer.ts_updated = Date.now()
    const updatedCustomer = await Customer.findByIdAndUpdate(
      args.id,
      { $set: tempCustomer },
    )
    if (!updatedCustomer){
      throw new ObjectNotFoundError()
    } else {
      return updatedCustomer
    }
  },
}

export { customerController }
