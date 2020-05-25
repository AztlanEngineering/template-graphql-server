import mongoose from 'mongoose'

const OAuth2Schema = new mongoose.Schema({
  access_token  :String,
  refresh_token :String,
  //id_token: String,
  provider      :String,
  picture       :String,
  email         :String,
  email_verified:Boolean,
  locale        :String,
  name          :String,
  //token_type: String,
  scope         :String,
  ts_created    :{ type: Date, default: Date.now },
  ts_updated    :{ type: Date, default: Date.now },
  expires       :{ type: Date }
})

const UserSchema = new mongoose.Schema({
  email          :String,
  first_name     :String,
  last_name      :String,
  ts_created     :{ type: Date, default: Date.now },
  ts_updated     :{ type: Date },
  username       :String,
  password       :String,
  handle         :String,
  profile_picture:String,
  superuser      :Boolean,
  operator       :Boolean,
  is_active      :Boolean,
  oauth2         :[
    OAuth2Schema
  ]
})

const User = mongoose.model('users', UserSchema)

export default User
