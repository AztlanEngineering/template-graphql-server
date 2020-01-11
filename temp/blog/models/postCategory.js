import mongoose from 'mongoose'

const PostCategorySchema = new mongoose.Schema({
  name: String,
  slug: String,
  title_tag:String,
  meta_description: String,
  seotext: String,
  star:{type:Boolean, default:0},
  icon:String,
  class:String,
})

const PostCategory = new mongoose.model('postCategory', PostCategorySchema)
//PostCategory.collection.dropIndex({ name:1, year:1 })

export { PostCategory }



