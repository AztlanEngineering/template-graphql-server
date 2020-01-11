import mongoose from 'mongoose'

const TicketSchema = new mongoose.Schema({
  // Base Info
  ts_created: {type: Date, default: Date.now},
  ts_updated: {type: Date, default: Date.now},
  // Make + Model + Year
  make: { type: String, ref: 'Make' },
  _make: String,
  model: { type: String, ref: 'Model' },
  _model: String,
  year: Number,
  km:String,
  // Client
  customer: { type: String, ref: 'Customer' },
  // Problem
  problem_category:
    { type: String, ref: 'Service' }
  ,
  problem_description: String,
  // Mechanic and price estimate
  mechanic: { type: String, ref: 'Mechanic' },
  vendor: { type: String, ref: 'User' },
  price_expected: Number,
  // On completion
  completed: { type: Boolean, default: 0 },
  price_final: Number,
  // Other
  other:String,
  is_car:{ type:Boolean, default:0 },
  is_motorcycle:{ type:Boolean, default:0 },
  is_from_site:{ type:Boolean, default:0 },
  star:{ type:Boolean, default:0 },
  // Meetings
  meetings: [
    { type: String, ref: 'Meeting' }
  ],
  // Logs
  logs: [
    { type: String, ref: 'Log' }
  ],
  new_parts: Boolean,
  mostly_city: { type:Boolean, default:0 }
})

const Ticket = new mongoose.model('ticket', TicketSchema)

export { Ticket }

