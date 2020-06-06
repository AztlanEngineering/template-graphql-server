import sequelize from 'database/connector'

import config from './config'

if (process.env.DEBUG === 'true') {
  console.log('LOADING => ORM Models from :', config.installedApps)
}

var modelGetters = {}
const models = {}

config.installedApps.forEach(appName=>{
  try {
    const localModels = require(`./apps/${appName}/models`)

    if(localModels) {
      modelGetters = {
        ...modelGetters,
        ...localModels,
      }
    }

  } catch(e) {
    console.log(`WARNING => No models found for package ${appName}`)
  }

})

Object.keys(modelGetters).forEach(key => {
  models[key] = modelGetters[key](sequelize)
})

Object.keys(models).forEach(key => {
  if ('associate' in models[key]) {
    models[key].associate(models)
  }
})


if (process.env.DEBUG === 'true') {
  console.log(`OK => ${Object.keys(models).length} models loaded :`, Object.keys(models))
}



export {
  models
}

