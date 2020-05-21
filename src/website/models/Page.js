/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default sequelize => {
  class Page extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  Page.init({
    id:{
      type        :DataTypes.UUIDV4,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    a:{
      type     :DataTypes.STRING,
      //type: DataTypes.BOOLEAN,
      //type: DataTypes.INTEGER,
      //type: DataTypes.BIGINT,
      allowNull:false,
      //defaultValue:'john',
      //unique:true
      //field:'column_name_here'
    },
  
    /*
    uuid:{
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'Page',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
    //tableName: 'pages'
    //freezeTableName: true
  })

  
  Page.associate = models => {
    models.Site.hasMany(Page) //this will give a foreign key to user here, and make it available from here
    //Page.hasOne(models.Site)
    //models.User.hasMany() //this will give this model a UserId field and make it available from user
  }

  return Page


  //Page.addHook('afterCreate', 'hookName', (e, options) => {})
}


