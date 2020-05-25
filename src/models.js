import { models as modelGetters } from './loadApps'

import sequelize from 'database/connector'

const models = {}

Object.keys(modelGetters).forEach(key => {
  models[key] = modelGetters[key](sequelize)
})

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

//console.log(models)

export default models
