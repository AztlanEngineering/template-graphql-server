/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, Model } from 'sequelize'
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
    category:{
      type:Sequelize.DataTypes.STRING
    },
    isActive:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:true
    },
    car:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    motorcycle:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    genericCta:{
      type:Sequelize.DataTypes.TEXT
    },
    carButton:{
      type:Sequelize.DataTypes.STRING
    },
    motoButton:{
      type:Sequelize.DataTypes.STRING
    },
    seotext:{
      type:Sequelize.DataTypes.TEXT
    },

    _string:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, ['name']),
      get :function() {
        return this.get('name')
      }
    },

    /*
  invisible: {
    type: Sequelize.DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue:false,
  },
  */
    icon:{
      type:Sequelize.DataTypes.STRING
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


