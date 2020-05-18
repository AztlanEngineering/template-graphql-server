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
      type         :DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey   :true
    },
    name:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    category:{
      type:DataTypes.STRING
    },
    seotext:{
      type:DataTypes.STRING
    },
    is_active:{
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
    slug:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    generic_cta:{
      type:DataTypes.STRING
    },
    carbutton:{
      type:DataTypes.STRING
    },
    motobutton:{
      type:DataTypes.STRING
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
    modelName:'Service'
  //tableName: 'services'
  //freezeTableName: true
  })
  //Service.addHook('afterCreate', 'hookName', (e, options) => {})

  return Service

}


