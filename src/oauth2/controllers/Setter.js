/* @fwrlines/generator-graphql-server-type 1.1.1 */
import {
  Setter as Model
} from '../models'
import {
  User
} from 'auth/models'
import { getTokenFor } from 'auth/utils'

import {
  //ConfigurationError,
  ValidationError,
  //NotUniqueError,
  ObjectNotFoundError
} from 'utils'

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

  login:async(root, { code:id }) => {
    let tempItem = await Model.findById(id)

    //console.log('got setter, ready to l/I', tempItem, tempItem.is_valid)
    if (tempItem.login()){
      tempItem = await User.populate(tempItem,
        { path: 'user', model: User }
      )
      // Do Login
      const token = getTokenFor(tempItem.user)
      Model.deleteOne({ _id: id })
      return token
    }
 
    throw new ValidationError({ message: 'Wrong authorization code' })
    
  },

  get:(root, { id }) => Model.findById( id ),

  add:(root, { input }) => {
    const item = new Model(input)
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
