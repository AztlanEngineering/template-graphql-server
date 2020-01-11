import { PostCategory } from '../models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'
import { User } from 'auth/models'


//TODO Need to populate the other queries

const postCategoryController = {
  all: (r, a, c) => PostCategory.find({})
    .populate([
      {path:'user', model:User}
    ]),

  postCategories: (r, a, c) => PostCategory.find({}),

  get: (r, a, c) => '',

  del: async(r, id, c) => {
    await PostCategory.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    const newPostCategory = new PostCategory(args)
    return newPostCategory.save()

  },
	 update: async (root, args) => {
    var tempPostCategory = { ...args.input }
    const updatedPostCategory = await PostCategory.findByIdAndUpdate(
      args.id,
      { $set: tempPostCategory },
    )
    if (!updatedPostCategory){
      throw new ObjectNotFoundError()
    } else {
      return updatedPostCategory
    }
  },
}

export { postCategoryController }
