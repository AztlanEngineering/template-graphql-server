/* @fwrlines/generator-graphql-server-type 1.1.1 */
import {
  Setter as Model
} from '../models'
import { ObjectNotFoundError } from 'utils/errors'


/*
import {
  ConfigurationError,
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'
*/
const LIMIT_PER_PAGE = 20

const Controller = {
  all:(root, args) => Model.find({}),

  /*
  paginated:(r, {
    page=1,
    //category,
    limit=LIMIT_PER_PAGE
  }, c) => {
    let args = {
      //published: {$lte : Date.now()}
    }
    //if (category) args['categoryRef'] = category
    return Model.paginate(args,
      {
        //sort: { published:-1 },
        limit,
        page
      }
    )
  },
  */

  get:(root, { id }) => Model.findById( id ),

  add:(root, args, context) => {
    const item = new Model(args)
    item.user = (context.user._id)
    return item.save()
  },

  delete:async(root, { id:_id }) => {
    await Model.deleteOne({ _id  }, (err) => {
      if (err) return false
    })
    return true
  },

	 update:async (root, { input, id }) => {
    const tempItem = { input }
    //tempItem.ts_updated = Date.now()
    const updatedItem = await Model.findByIdAndUpdate(
      id,
      { $set: tempItem },
      { new: true }
    )
    if (!updatedItem){
      throw new ObjectNotFoundError()
    }
    else {
      return updatedItem
    }
  }
}

export default Controller
