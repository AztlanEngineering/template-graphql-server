import { Log, Ticket } from '../models'
import { User } from 'auth/models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const logController = {
  del: async(r, id, c) => {
    await Log.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Log.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newLog = new Log(args.input)
    newLog.user = c.user.id
    //newLog.mobile_phone = Number(newLog.mobile_phone) // For floats
    var res = await newLog.save()
    res = await Log.populate(res, [
      {path:'user', model:User},
    ])
    await Ticket.findByIdAndUpdate(
      args.ticketId,
      { $push: { logs:res._id}, $set: { ts_updated:Date.now() } },
    )
    console.log(223322323, args)
    return res

  },
}

export { logController }
