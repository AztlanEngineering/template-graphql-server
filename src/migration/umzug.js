import { Umzug, SequelizeStorage } from 'umzug'
import { Sequelize } from 'sequelize'

import sequelize from 'connector'

const umzug = new Umzug({
  migrations:{
    path               :'src/',
    traverseDirectories:true,
    pattern            :/^\d+[\w-]+\.migration\.js$/,
    params             :[
      sequelize.getQueryInterface(),
      Sequelize
    ]
  },
  storage:new SequelizeStorage({
    sequelize :sequelize,
    modelName :'Migrations',
    tableName :'migrations',
    schema    :'meta',
    columnName:'migrationName',
    timestamps:true,
  })
})

export default umzug
