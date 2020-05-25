import config from './config'

import query from 'utils/schemas/query.graphql'
import mutation from 'utils/schemas/mutation.graphql'


if (process.env.DEBUG === 'true') {
  console.log('LOADING => GraphQL Schema from :', config.installedApps)
}

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


  /*
  if(localModels) {
    models = {
      ...models,
      ...localModels,
    }
  }
  */

})

//console.log(131313, 'exporting soon')


if (process.env.DEBUG === 'true') {
  const checkDependencies = () => {

    dependencies.forEach((e, i, a) => {
      const previousItems = a.slice(0, i)
      const valid = e.dependencies.reduce((a,f) =>{
        const satisfied = previousItems.find(k => k.name === f) ? true : false
        //console.log(`In package ${e.name}, dependency ${f} is satisfied :`, satisfied )

        if(!satisfied) {
          throw new Error(`In package ${e.name}, dependency ${f} not is satisfied. Make sure that ${f} is correctly loaded and that ${f} is loaded before ${e.name}.`
          )
        }
        return satisfied ? a*1 : a*0 
      },
      1)
      //const dependenciesAreValid = { name: e.name, valid }
    })

  }

  checkDependencies()

  console.log(`OK => ${config.installedApps.length} apps loaded :`, config.installedApps)
}



export {
  typeDefs,
  resolvers,
}

