/* @fwrlines/generator-graphql-server-type 1.3.1 */
import models from 'models'
import { ObjectNotFoundError } from 'utils'

const Model = models.Service

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
  all:(root, args) => Model.findAll({}),

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

  get:(root, { id }) => Model.findByPk( id ),

  add:async (root, args) => {
    await Model.create(args)
  },

  delete:async (root, { id }) => {
    const item = await Model.findByPk(id).catch(e => {
      console.log(e.message)
    })
    if (!item) {
      return false
    }
    item.destroy()
    return true
  },

	 update:async (root, { input, id }) => {
    const updated = await Model.update(input, {
      where:{
        id
      }
    }).catch(
      e => console.log(e.message)
    )
    return updated[0]
  }
}

export default Controller
