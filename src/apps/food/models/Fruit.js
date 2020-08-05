/* @fwrlines/generator-graphql-server-type 2.8.1 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Fruit extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  Fruit.init({
    id:{
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      //type: Sequelize.DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey  :true,
      allowNull   :false,
    },
    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    taste:{
      type:Sequelize.DataTypes.STRING,
    },

    _string:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, ['name']),
      get :function() {
        return this.get('name')
      }
    },
  
    /*
    uuid:{
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'Fruit',
    tableName:'food_fruits',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    //freezeTableName: true
  })

  return Fruit

  //Fruit.addHook('afterCreate', 'hookName', (e, options) => {})
}


