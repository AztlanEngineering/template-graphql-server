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

    async updateData(newData) {
      const oldData = this.data
      this.data = {
        ...oldData,
        ...newData
      }
      return await this.save()
    }
  
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
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{}
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
      as        :'pages',
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:Sequelize.DataTypes.UUID,
        //allowNull:false
      }
    })
    
    //This second association is unnecceaary
    Page.belongsTo(models.Site, {
      as        :'website',
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


