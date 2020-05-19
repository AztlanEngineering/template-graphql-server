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
      type         :DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey   :true
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
    active_from:{
      type:DataTypes.STRING
    },
    active_to:{
      type:DataTypes.STRING
    },
    country:{
      type:DataTypes.STRING
    },
    is_common:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    is_active:{
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
    modelName:'Make'
  })

  return Make


}

