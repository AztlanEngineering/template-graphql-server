/* @fwrlines/generator-graphql-server-type 2.1.1 */

import { Sequelize, DataTypes, Model } from 'sequelize'

import { VercelAPI } from '../utils'

export default sequelize => {
  class Domain extends Model {
  
    static async isDomainAvailable(domain) {
      const response = VercelAPI.get.isDomainAvailable(domain)
      return response.available
    }
  
    /*
    instanceLevelMethod() {
      return this.first_name
    }
    */

    async order() {
      this.ordered = true
      return await this.save()
    }
    
    validDns() {

    }

    async validateDns() {
      this.valid = true
      return await this.save()
    }

  
  } 
  
  Domain.init({
    id:{
      type         :DataTypes.INTEGER,
      allowNull    :false,
      autoIncrement:true,
      primaryKey   :true,
    },

    name:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    alt:{
      type     :DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    ordered:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    bought:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },
  
    installed:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    expected_dns:{
      type:DataTypes.JSON,
    },

    main:{
      type:new DataTypes.VIRTUAL(DataTypes.STRING, ['name', 'alt', 'installed']),
      get :function() {
        return this.get('installed') ? this.get('name') : this.get('alt')
      }
    }

  },{
    sequelize,
    modelName:'Domain',
    //tableName: 'domains'
    //freezeTableName: true
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  })

  
  Domain.associate = models => {
    //Domain.belongsTo(models.Site) //this will give a foreign key to B here, and make it available from here
    models.Site.belongsTo(Domain)
    //models.User.hasMany() //this will give this model a UserId field and make it available from user
  }

  return Domain

  //Domain.addHook('afterCreate', 'hookName', (e, options) => {})
}


