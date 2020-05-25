import mongoose from 'mongoose'

const ServiceSchema = new mongoose.Schema({
  name       :{ type: String, unique: true },
  category   :String,
  seotext    :String,
  is_active  :{ type: Boolean, default: 1 },
  car        :{ type: Boolean },
  motorcycle :{ type: Boolean },
  slug       :String,
  generic_cta:String,
  carbutton  :String,
  motobutton :String,
  invisible  :{ type: Boolean, default: 0 },
  icon       :String
})

const Service = new mongoose.model('service', ServiceSchema)

export default Service
