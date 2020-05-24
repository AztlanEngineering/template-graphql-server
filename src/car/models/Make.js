/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, Model } from 'sequelize'

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
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    activeFrom:{
      type:Sequelize.DataTypes.STRING
    },
    activeTo:{
      type:Sequelize.DataTypes.STRING
    },
    country:{
      type:Sequelize.DataTypes.STRING
    },
    isCommon:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    isActive:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    car:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:true
    },
    motorcycle:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    seotext:{
      type:Sequelize.DataTypes.TEXT
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

