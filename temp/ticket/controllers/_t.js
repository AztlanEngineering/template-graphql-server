import { Meeting } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'

const meetingController = {
  all: (r, a, c) => Meeting.find({}),
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
    return newMeeting.save()

  },
	 update: async (root, args) => {
    const tempMeeting = { ...args.input }
		 //tempMeeting.ts_updated = Date.now()
    const updatedMeeting = await Meeting.findByIdAndUpdate(
      args.id,
      { $set: tempMeeting },
    )
    if (!updatedMeeting){
      throw new ObjectNotFoundError()
    } else {
      return updatedMeeting
    }
  },
}

export { meetingController }
