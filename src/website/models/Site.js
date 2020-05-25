/* @fwrlines/generator-graphql-server-type 2.1.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default sequelize => {
  class Site extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
    async addDomain(domain, alt) {

    }

    async verifyDomain() {

    }

    async updateData(newData) {
      const oldData = this.data
      this.data = {
        ...oldData,
        ...newData
      }
      return await this.save()
    }
  
  } 
  
  Site.init({
    id:{
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    name:{
      type        :Sequelize.DataTypes.STRING,
      //type: Sequelize.DataTypes.BOOLEAN,
      //type: Sequelize.DataTypes.INTEGER,
      //type: Sequelize.DataTypes.BIGINT,
      allowNull   :false,
      defaultValue:'john',
      //unique:true
      //field:'column_name_here'
    },

    data:{
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{}
    },
  
  
    /*
    uuid:{
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'Site',
    tableName:'websites',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
    //tableName: 'sites'
    //freezeTableName: true
  })

  
  Site.associate = models => {
    //Here we do a reverse association to be able to query both the site and the domain doing one request less
    Site.belongsTo(models.Domain, {
      targetKey :'name',
      foreignKey:{
        name:'domainName',
        type:Sequelize.DataTypes.STRING,
        //allowNull:false
      }
    })

    models.Domain.hasOne(Site, {
      targetKey :'name',
      foreignKey:{
        name:'domainName',
        type:Sequelize.DataTypes.STRING,
        //allowNull:false
      }
    })

  }

  return Site


  //Site.addHook('afterCreate', 'hookName', (e, options) => {})
}


