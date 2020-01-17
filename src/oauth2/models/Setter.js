import mongoose from 'mongoose'

const getDefaultExpireTime = () => Date.now() + (Number(process.env.TIME_TO_LOGIN) || 120) * 1000

const SetterSchema = new mongoose.Schema({
  user        :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  s           :String,
  provider    :String,
  expires     :{ type: Date, default: getDefaultExpireTime },
  ts_created  :{ type: Date, default: Date.now },
  use_to_login:{ type: Boolean, default: false }
})

SetterSchema.virtual('is_valid').get(function () {
  return Date.now() <= this.expires
})

SetterSchema.methods.login = function() {
  //console.log(this)
  if (this.is_valid && this.use_to_login){
    this.use_to_login = false,
    this.save()
    return true
  }
  return false
}

SetterSchema.pre('save', () => {
  console.log('pre save setter', this)
})

const Setter = mongoose.model('setters', SetterSchema)

//MainSchema.plugin(require('mongoose-autopopulate'))
//MainSchema.plugin(require('mongoose-paginate-v2'))
//ModelSchema.index({ name: 1, year: 1}, { unique: true })
export default Setter


