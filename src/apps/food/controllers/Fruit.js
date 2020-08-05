/* @fwrlines/generator-graphql-server-type 2.8.1 */
import models from 'models'
import { ObjectNotFoundError } from 'utils'

//import { AuthenticationError } from 'apollo-server'

const Model = models.Fruit


const ownerIdKey = 'ownerId' //The model field that defined the ownership relation with the user model

const include = [
  { all: true }
  //{ model: models.DictionaryAuthor, as: 'author' }
]

/*
import {
  ConfigurationError,
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'
*/

const Controller = {

  //
  // 1. ADMIN-PROTECTED METHODS
  // PLEASE ENSURE THESE METHODS ARE PROTECTED PROPERLY AT THE RESOLVER LEVEL
  //

  all:(root, args) => Model.findAll({
    //include,
    raw:true,
    nest:true,
    //plain:true // https://github.com/sequelize/sequelize/issues/6950
  }),

  get:(root, { id }) => Model.findByPk( id, { 
    //include,
    plain:true 
  } ),

  add:(root, { input }) => Model.create( input, {
    //include,
    plain:true
  }),

  update:async (root, { input, id }) => {
    const updated = await Model.update(input, {
      where:{
        id
      },
      returning:true
    }).catch(
      e => console.log(e.message)
    )
    return updated[1][0] //we return the first updated item
  },

  delete:async (root, { id }) => {
    const item = await Model.findByPk(id).catch(e => {
      console.log(e.message)
    })
    if (!item) {
      return false
    }
    await item.destroy()
    return item.id
  },


  
}

export default Controller

