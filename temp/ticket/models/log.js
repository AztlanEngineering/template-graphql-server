import mongoose from 'mongoose'

const ObjectId = mongoose.ObjectId
//ObjectId.get(v => v ? v.toString() : '')

// Type 0 : Test Log
// Type 1 : Initial Call
// Type 2 : Initial Whatsapp
// Type 3 : Initial Call No Answer
// Type 4 : No answer on whatsapp after 24 hours
// Type 5 : Mechanic Meeting Call
// Type 6 : Mechanic Confirmation Call
// Type 9 : Other


const LogSchema = new mongoose.Schema({
  ts_created: {type: Date, default: Date.now},
  type: Number,
  user : { type: String, ref: 'User' },
  note : { type: String }
})

const Log = new mongoose.model('log', LogSchema)

export { Log }

