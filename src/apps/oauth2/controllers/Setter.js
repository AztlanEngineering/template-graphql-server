import models from 'models'
import { ObjectNotFoundError } from 'utils'

const Model = models.OAuth2Setter

/*
import {
  ConfigurationError,
  ValidationError,
  NotUniqueError,
  ObjectNotFoundError
} from 'utils'
*/

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

  clean:() => Model.clean()

  /*
  login:async(root, { code }) => {
    const item = await Model.findOne(where:{ code })

    //console.log('got setter, ready to l/I', tempItem, tempItem.is_valid, code)
    if (item && item.login()){
      item = await User.populate(item,
        { path: 'user', model: User }
      )
      // Do Login
      const token = getTokenFor(item.user)
      item.destroy()
      return token
      //TODO delete all expired codes here (????)
    }
 
    throw new ValidationError({ message: 'Wrong authorization code' })
    
  },

  clean:async (root) => {
    const deleted = await Model.deleteMany({ expires: { $lte: Date.now() } })
    //console.log(999, deleted)
  }*/
}

export default Controller
