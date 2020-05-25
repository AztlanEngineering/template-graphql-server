/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Tag extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
    async updateData(newData) {
      const oldData = this.data
      this.data = {
        ...oldData,
        ...newData
      }
      return await this.save()
    }
  
  } 
  
  Tag.init({
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
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      //field:'column_name_here'
    },

    data:{
      type:Sequelize.DataTypes.JSON,
    }
  
  },{
    sequelize,
    modelName:'DictionaryTag',
    tableName:'dictionary_tags',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    //freezeTableName: true
  })

  
  Tag.associate = models => {
  }

  return Tag

  //Tag.addHook('afterCreate', 'hookName', (e, options) => {})
}


