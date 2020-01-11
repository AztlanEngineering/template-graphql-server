import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema({
  // Base Info
  ts_created: { type: Date, default: Date.now },
  ts_updated: { type: Date },
  first_name: String,
  last_name: String,
  //  Contact Info
  address: String, // Used later
  address_2: String, // Used later
  city: String,
  postcode: String,
  mobile_phone: Number,
  has_whatsapp: { type: Boolean, default: 0 },
  email: String,
  // Contact preferences
  preferred_medium: String,
  preferred_time: String,
  // Other
  notes: String,
})

const Customer = new mongoose.model('customer', CustomerSchema)

export { Customer }

