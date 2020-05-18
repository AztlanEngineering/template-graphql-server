import mongoose from 'mongoose'

const MakeSchema = new mongoose.Schema({
  name       :{ type: String, unique: true },
  slug       :String,
  active_from:String,
  active_to  :String,
  country    :String,
  is_common  :Boolean,
  is_active  :Boolean, //Is active on the front end (!= active as a make)
  car        :Boolean,
  motorcycle :Boolean,
  seotext    :String
})

const Make = new mongoose.model('make', MakeSchema)

export default Make
