import mongoose from 'mongoose'

const ObjectId = mongoose.ObjectId
//ObjectId.get(v => v ? v.toString() : '')

const MeetingSchema = new mongoose.Schema({
  for: String,
  datetime: { type: Date },
  mechanic: { type: String, ref: 'Mechanic' },
  ticket : { type: String, ref: 'Ticket' }
})

const Meeting = new mongoose.model('meeting', MeetingSchema)

export { Meeting }

