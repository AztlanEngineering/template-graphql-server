/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Author extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  Author.init({
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
      //unique:true
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    altName:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      //unique:true
    },

    publicPicture:{
      type:Sequelize.DataTypes.TEXT,
    },

    authorityLink:{
      type:Sequelize.DataTypes.TEXT,
    },

    publicLink:{
      type:Sequelize.DataTypes.TEXT,
    },

    description:{
      type:Sequelize.DataTypes.TEXT,
    },

    data:{
      type:Sequelize.DataTypes.JSON,
    }
  
  },{
    sequelize,
    modelName:'DictionaryAuthor',
    tableName:'dictionary_authors',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    //freezeTableName: true
  })

  
  Author.associate = models => {
  }

  return Author

  //Author.addHook('afterCreate', 'hookName', (e, options) => {})
}


