import mongoose from 'mongoose'

import { randomString } from 'utils'

const getDefaultExpireTime = () => Date.now() + (Number(process.env.TIME_TO_LOGIN) || 120) * 1000

const SetterSchema = new mongoose.Schema({
  user      :{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  code      :{ type: String, default: () => randomString(64) },
  expires   :{ type: Date, default: getDefaultExpireTime },
  ts_created:{ type: Date, default: Date.now },

  use_to_login:{ type: Boolean, default: false }, //if it's valid
  provider    :String
},
{
  toObject:{ virtuals: true },
  toJson  :{ virtuals: true }
}
)

//SetterSchema.virtual('blu').get(() => 999999)

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

SetterSchema.pre('save', function() {
  //const expiredSetters = this.model.find({ expires: { $lte: Date.now() }Y }) //model not available on some hooks, especially save https://stackoverflow.com/questions/40952001/get-model-count-in-mongoose-pre-hooks
  //const expiredSetters = this.model.find({ expires: { $lte: Date.now() } })
  //const expiredSetters = 'hey'
  //console.log('xxxxxxxxxxx', expiredSetters)
  console.log('pre save setter', this)
})

/*
SetterSchemq.post('find', function() {
  //We remove all expired tokens
}
)
*/

const Setter = mongoose.model('setters', SetterSchema)

//MainSchema.plugin(require('mongoose-autopopulate'))
//MainSchema.plugin(require('mongoose-paginate-v2'))
//ModelSchema.index({ name: 1, year: 1}, { unique: true })
export default Setter


