/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default sequelize => {
  class Make extends Model {

  /*
  static classLevelMethod() {
  }

  instanceLevelMethod() {
    return this.first_name
  }
  */
  }

  Make.init({
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
    activeFrom:{
      type:DataTypes.STRING
    },
    activeTo:{
      type:DataTypes.STRING
    },
    country:{
      type:DataTypes.STRING
    },
    isCommon:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    isActive:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    car:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:true
    },
    motorcycle:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    seotext:{
      type:DataTypes.TEXT
    }

  },{
    sequelize,
    modelName:'Make',
    tableName:'makes',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  })

  return Make


}

