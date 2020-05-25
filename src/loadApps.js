import config from './config'

import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'



const dependencies = [
 
]



const baseTypes = [
  query,
  mutation
]

const typeDefs = [
  ...baseTypes

]


const resolvers = [

]


var models = {

}


config.installedApps.forEach(appName=>{
  const {
    dependencies:localDependencies,
    models:localModels,
    resolvers:localResolvers,
    types:localTypes
  } = require(`./apps/${appName}`)

  dependencies.push(
    {
      name        :appName,
      dependencies:localDependencies
    }
  )

  localTypes && typeDefs.push(
    ...localTypes
  )

  localResolvers && resolvers.push(
    ...localResolvers
  )

  if(localModels) {
    models = {
      ...models,
      ...localModels,
    }
  }

})

console.log(1111111,'Apps loaded')
//console.log(dependencies,resolvers, models)
console.log('PM', models)

const checkDependencies = () => true

export {
  typeDefs,
  resolvers,
  models
}

