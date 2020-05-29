import models from 'models'
import { ObjectNotFoundError } from 'utils'

const Model = models.OAuth2Setter

import {
  //ConfigurationError,
  ValidationError,
  //NotUniqueError,
  //ObjectNotFoundError
} from 'utils'

const include = [
  { all: true }
  //{ model: models.DictionaryExpression, as: 'expressions' }
]

const Controller = {
  all:(root, args) => Model.findAll({
    include, 
    raw :true,
    nest:true
    //plain:true
  }),

  get:(root, { id }) => Model.findByPk( id, { 
    include, 
    plain:true 
  } ),

  add:async (root, { input }) => await Model.create( input, { 
    include, 
    plain:true 
  } ),

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

  login:async(root, { authorization_code }) => {
    const item = await Model.findOne({
      where:{
        code:authorization_code
      },
      include:{ all: true },
      plain  :true,
    }) 
    if(item && item.login()) {
      if(item.user.canLogIn()) {
        const token = await item.user.getAuthToken() 
        item.destroy()
        return token
      }
    }
    throw new ValidationError({ message: 'Incorrect credentials' }) //User not found
  },

  clean:() => Model.clean(),
}

export default Controller
