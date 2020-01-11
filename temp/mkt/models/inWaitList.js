import mongoose from 'mongoose'

const InWaitListSchema = new mongoose.Schema({
  ts_created: {type: Date, default: Date.now},
  ts_updated: {type: Date, default: Date.now},
  sent: {type: Boolean, default: 0},
  confirmed: {type: Boolean, default: 0},
  postcode: Number,
  email: String,
  ua: String,
  ip: String,
  ip_location: String,

})

const InWaitList = new mongoose.model('inWaitList', InWaitListSchema)

export { InWaitList }

