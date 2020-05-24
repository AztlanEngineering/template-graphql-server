/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { Sequelize, Model } from 'sequelize'

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
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:true,
    },

    metaData:{
      type:Sequelize.DataTypes.JSON,
    },

    data:{
      type:Sequelize.DataTypes.JSON,
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
        type:Sequelize.DataTypes.UUID,
        //allowNull:false
      }
    })
    
    Page.belongsTo(models.Site, {
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:Sequelize.DataTypes.UUID,
        //allowNull:false
      }
    })
    
  }

  return Page


  //Page.addHook('afterCreate', 'hookName', (e, options) => {})
}


