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
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    name:{
      type     :DataTypes.STRING,
      allowNull:false,
      //defaultValue:'john',
      //unique:true
      //field:'column_name_here'
    },

    slug:{
      type     :DataTypes.STRING,
      allowNull:true,
      //defaultValue:'john',
      //field:'column_name_here'
    },

    metaData:{
      type:DataTypes.JSON,
    },

    data:{
      type:DataTypes.JSON,
    },
  
  },{
    sequelize,
    modelName:'Page',
    tableName:'website_pages',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    indexes  :[
      {
        unique:true,
        fields:['slug', 'siteId']
      }
    ]
    //tableName: 'pages'
    //freezeTableName: true
  })

  
  Page.associate = models => {

    models.Site.hasMany(Page, {
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:DataTypes.UUID,
        //allowNull:false
      }
    })
    
    Page.belongsTo(models.Site, {
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:DataTypes.UUID,
        //allowNull:false
      }
    })
    
  }

  return Page


  //Page.addHook('afterCreate', 'hookName', (e, options) => {})
}


