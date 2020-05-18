import * as authModels from 'auth/models'
import * as oAuth2Models from 'oauth2/models'
import * as carModels from 'car/models'

import sequelize from 'connector'

const modelGetters = {
  ...authModels,
  ...oAuth2Models,
  ...carModels
}

const models = {}

Object.keys(modelGetters).forEach(key => {
  models[key] = modelGetters[key](sequelize)
})

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

console.log(models)

export default models
