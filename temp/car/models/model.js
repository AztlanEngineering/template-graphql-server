import mongoose from 'mongoose'

const ObjectId = mongoose.ObjectId
//ObjectId.get(v => v ? v.toString() : '')

const ModelSchema = new mongoose.Schema({
  name: String,
  slug: String,
  year: Number,
  api_id: Number,
  make : {
    type: ObjectId,
    ref: 'Make',
    index: true
  },
  make_slug:String,
})
ModelSchema.index({ name: 1, year: 1}, { unique: true })


const Model = new mongoose.model('model', ModelSchema)

export { Model }



