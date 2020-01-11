import { Meeting, Ticket, Mechanic, Service, Customer } from '../models'
import { Make } from 'car/models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const meetingController = {
  all: async(r, a, c) => {
    var temp = await Meeting.find({})
      .populate([
        {path:'ticket', model:Ticket},
        {path:'mechanic', model:Mechanic}
      ])
    temp = await Meeting.populate(temp, [
      // {
      // path: 'ticket.problem_category',
      // model: Service
      // }, // Expected Iterable, but did not find one for field CTicket.problem_category.
      {
        path: 'ticket.customer',
        model: Customer
      },
      {
        path: 'ticket.make',
        model: Make
      }
    ])

    return temp
  },
  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await Meeting.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    // const { errors, isValid } = validateSignupInput(args)
    // if(!isValid) {
    // throw new ValidationError({data:errors})
    // }
    // const email_exists = await Meeting.findOne({
    // email: args.email
    // })
    // if(email_exists) {
    // throw new NotUniqueError({message:'email already exists', data:{email: 'email already exists'}})
    // }
    const newMeeting = new Meeting(args)

    //newMeeting.mobile_phone = Number(newMeeting.mobile_phone) // For floats
    var res = await newMeeting.save()
    res = await Meeting.populate(res, [
      {path:'ticket', model:Ticket},
      {path:'mechanic', model:Mechanic}
    ])
    console.log('SAVE NEW MTN', newMeeting, res)
    res = await Meeting.populate(res, [
      {
        path: 'ticket.problem_category',
        model: Service
	    },
      {
        path: 'ticket.customer',
        model: Customer
      },
      {
        path: 'ticket.make',
        model: Make
      }
    ])
    const t = await Ticket.findByIdAndUpdate(
      args.ticket,
      { $push: { meetings:res._id}, $set: { ts_updated:Date.now() } },
    )
    console.log('UPUPUP', t)

    return res

  },
  update: async (root, args) => {
    const tempMeeting = { ...args.input }
    //tempMeeting.ts_updated = Date.now()
    var updatedMeeting = await Meeting.findByIdAndUpdate(
      args.id,
      { $set: tempMeeting },
    )
      .populate([
        {path:'ticket', model:Ticket},
        {path:'mechanic', model:Mechanic}
      ])
    updatedMeeting = await Meeting.populate(updatedMeeting, [
      {
        path: 'ticket.problem_category',
        model: Service
	    },
      {
        path: 'ticket.customer',
        model: Customer
      },
      {
        path: 'ticket.make',
        model: Make
      }
    ])

    if (!updatedMeeting){
      throw new ObjectNotFoundError()
    } else {
      await Ticket.findByIdAndUpdate(
        updatedMeeting.id,
        { $push: { meetings:updatedMeeting._id}, $set: { ts_updated:Date.now() } },
      )
      return updatedMeeting
    }
  },
}

export { meetingController }
