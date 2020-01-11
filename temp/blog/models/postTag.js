import mongoose from 'mongoose'

const PostTagSchema = new mongoose.Schema({
  name: String,
  slug: String,
  title_tag:String,
  meta_description: String,
  seotext: String,
  star:{type:Boolean, default:0}
})

const PostTag = new mongoose.model('postTag', PostTagSchema)
//PostTag.collection.dropIndex({ name:1, year:1 })

export { PostTag }



