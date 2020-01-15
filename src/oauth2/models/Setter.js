import mongoose from 'mongoose'

const getDefaultExpireTime = () => Date.now() + (process.env.TIME_TO_LOGIN || 120) * 1000

const SetterSchema = new mongoose.Schema({
  user      :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  s         :String,
  provider  :String,
  expires   :{ type: Date, default: getDefaultExpireTime },
  ts_created:{ type: Date, default: Date.now }
})

SetterSchema.virtual('is_valid').get(function () {
  return Date.now() <= this.expires
})

SetterSchema.pre('save', () => {
  console.log('pre save setter', this)
})

const Setter = mongoose.model('setters', SetterSchema)

//MainSchema.plugin(require('mongoose-autopopulate'))
//MainSchema.plugin(require('mongoose-paginate-v2'))
//ModelSchema.index({ name: 1, year: 1}, { unique: true })
export default Setter


