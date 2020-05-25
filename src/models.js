/*
import { models as modelGetters } from './loadApps'

import sequelize from 'database/connector'

const models = {}

const getModel = (modelName) => models[modelName]
export { getModel }


console.log(665, 'loading models now')

Object.keys(modelGetters).forEach(key => {
  models[key] = modelGetters[key](sequelize)
})

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})

console.log(777, 'models should be full', models)

export default models
*/
import { models } from './loadModels.js'
export default models
const getModel = () => { return {} }
export { getModel }
