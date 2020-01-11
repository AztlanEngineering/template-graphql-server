import mongoose from 'mongoose'

const MechanicSchema = new mongoose.Schema({
  // Base Info
  ts_created: {type: Date, default: Date.now},
  ts_updated: {type: Date, default: Date.now},
  first_name: String,
  last_name: String,
  shop_name: String,
  //  Contact Info
  address: String, // Used later
  address_2: String, // Used later
  city: String,
  zone: String, // Normally equal to city
  postcode: String,
  mobile_phone: Number,
  has_whatsapp: { type:Boolean, default: false  },
  shop_phone: Number,
  num_mechanics: Number,
  num_elevators: Number,
  email: String,
  preferred_medium: String,
  repairs_motorcycles: Boolean,
  repairs_cars: Boolean,
  // Other
  notes: String,
})

const Mechanic = new mongoose.model('mechanic', MechanicSchema)

export { Mechanic }

