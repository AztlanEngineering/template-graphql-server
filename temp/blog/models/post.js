import mongoose from 'mongoose'

const PostSchema = new mongoose.Schema({
  ts_created: {type: Date, default: Date.now},
  ts_updated: {type: Date, default: Date.now},
  published: {type: Date },
  title: String,
  title_tag: String,
  itemtype:String,
  url: String,
  meta_description: String,
  main_image:String,
  content: String,
  description: String,
  default_size:String,
  label:String,
  flag_green: {type: Boolean, default: false},
  flag_blue: {type: Boolean, default: false},
  flag_red: {type: Boolean, default: false},
  noindex: {type: Boolean, default: false},
  user : {
    type: String,
    ref: 'users',
    autopopulate: true
  },
  categoryRef : {
    type: String,
  },
  related:[
    {
      type: String,
      ref: 'post',
      autopopulate: { maxDepth: 1 }
    },
  ],
  services:[
    {
      type: String,
      ref: 'service',
      autopopulate: true
    },
  ],
  word_count: { type: Number, default: 0 },
  mkt1 : {
    type: String,
    ref: 'marketingText',
    autopopulate: true
  },
})

PostSchema.virtual('category', {
  ref: 'postCategory', // The model to use
  localField: 'categoryRef', // Find people where `localField`
  foreignField: 'slug', // is equal to `foreignField`
  justOne: true,
  autopopulate:true,
})

PostSchema.plugin(require('mongoose-autopopulate'))
PostSchema.plugin(require('mongoose-paginate-v2'))

const Post = new mongoose.model('post', PostSchema)
//Post.collection.dropIndex({ name:1, year:1 })

export { Post }



