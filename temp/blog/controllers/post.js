import { Post, PostCategory } from '../models'
import { Service } from 'ticket/models'
import { ObjectNotFoundError } from 'utils/errors'
import { Types as T } from 'mongoose'
import { User } from 'auth/models'


//TODO Need to populate the other queries
const LIMIT_PER_PAGE = 14
const LIMIT_PER_CATEGORY_REQ = 6

const postController = {
  all: (r, a, c) => Post.find({}),

  //Used by the category Resolver
  postsByCategory: (r, { category:categoryRef, limit=LIMIT_PER_CATEGORY_REQ }, c) => {
    var args = {
      published: {$lte : Date.now()},
      categoryRef
    }
    return Post.find(args).limit(limit)
    //const kk =  Post.paginate(args,
    //return Post.find(args).sort({published : -1})

  },

  posts: (r, { page=1, category, limit=LIMIT_PER_PAGE }, c) => {
    var args = {
      published: {$lte : Date.now()}
    }
    if (category) args['categoryRef'] = category
    //const kk =  Post.paginate(args,
    return Post.paginate(args,
      {
        sort: { published:-1 },
        limit,
        page,
      }
    )
    //return Post.find(args).sort({published : -1})

  },

  get: (r, id, c) => Post.findById(id),

  getBySlug: (r, slug, c) => Post.findOne({ url: slug }),

  del: async(r, id, c) => {
    await Post.deleteOne({ _id:id  }, function (err) {
      if (err) return false
    })
    return true
  },

  add: async (r, args, c) => {
    const { category, ...inputs } = args
    const newPost = new Post(inputs)
    newPost.user = c.user.id
    newPost.categoryRef = category
    newPost.word_count = newPost.content.split(/[ .,]+/).length
    return newPost.save()

  },
	 update: async (root, args) => {
    var { category, ...tempPost } = args.input
    tempPost.ts_updated = Date.now()
    tempPost.categoryRef = category
    tempPost.word_count = tempPost.content.split(/[ .,]+/).length
    const updatedPost = await Post.findByIdAndUpdate(
      args.id,
      { $set: tempPost },
    )
    if (!updatedPost){
      throw new ObjectNotFoundError()
    } else {
      return updatedPost
    }
  },
}

export { postController }
