/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'
//import sequelize from 'connector'

export default sequelize => {
  class Service extends Model {

  /*
  static classLevelMethod() {
  }

  instanceLevelMethod() {
    return this.first_name
  }
  */
  }

  Service.init({
    id:{
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    name:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    slug:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    category:{
      type:DataTypes.STRING
    },
    isActive:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:true
    },
    car:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    motorcycle:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    genericCta:{
      type:DataTypes.TEXT
    },
    carButton:{
      type:DataTypes.STRING
    },
    motoButton:{
      type:DataTypes.STRING
    },
    seotext:{
      type:DataTypes.TEXT
    },

    /*
  invisible: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false,
  },
  */
    icon:{
      type:DataTypes.STRING
    }
  },{
    sequelize,
    modelName:'Service',
    tableName:'services',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
  //freezeTableName: true
  })
  //Service.addHook('afterCreate', 'hookName', (e, options) => {})

  return Service

}


