/* @fwrlines/generator-graphql-server-type 2.1.1 */

import { Sequelize, DataTypes, Model } from 'sequelize'

import { VercelAPI } from '../utils'

export default sequelize => {
  class Domain extends Model {
  
    static async isAvailable(domain) {
      const { available } = await VercelAPI.get.isDomainAvailable(domain)
      return available
    }

    async order() {
      //ORDER LOGIN
      this.isOrdered = true
      await this.save()
      return true
    }

    /*
    instanceLevelMethod() {
      return this.first_name
    }
    */
    async addToVercel() {
      if (this.vercelDomainId) {
        //TODO Raise error = this domain is already on Vervel
        return false
      }
      const options = {}
      if(this.vercelTeamId)  {
        options['teamId'] = this.vercelTeamId
      }
      const { domain } = await VercelAPI.post.addDomain(options, {name: this.name})
      this.vercelDomainId = domain.id
      this.isInstalled = false
      await this.save()
      return true
    }
    
    async deleteFromVercel() {
      const options = {
        name:this.name
      }

      if(this.vercelTeamId)  {
        options['teamId'] = this.vercelTeamId
      }

      const { uid } = await VercelAPI.delete.domain(options)

      this.vercelDomainId = null
      this.isInstalled = false
      await this.save()

      return true 
    }

    
    async validateVercelDns() {
      const options = {name: this.name}
      
      if(this.vercelTeamId)  {
        options['teamId'] = this.vercelTeamId
      }

      try {
        const { domain } = await VercelAPI.post.verifyDomain(options)
        this.bought = true //In case this wasnt activated TODO remove and move
        this.isInstalled = true 
        return await this.save()
      } catch(e) {
        return false
      }
    }

    async getInfoFromVercel() {
      const options = {name: this.name}
      
      if(this.vercelTeamId)  {
        options['teamId'] = this.vercelTeamId
      }

      const { domain } = await VercelAPI.get.domain(options)

      return domain
    }
  } 
  
  Domain.init({
    id:{
      type        :DataTypes.UUIDV4,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
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

    isOrdered:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    isBought:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },
  
    isInstalled:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    expected_dns:{
      type:DataTypes.JSON,
    },

    vercelTeamId:{
      type        :DataTypes.STRING,
      defaultValue:process.env.VERCEL_TEAM_ID
    },

    vercelDomainId:{
      type:DataTypes.STRING,
    },

    main:{
      type:new DataTypes.VIRTUAL(DataTypes.STRING, ['name', 'alt', 'isInstalled']),
      get :function() {
        return this.get('isInstalled') ? this.get('name') : this.get('alt')
      }
    },

    isAddedToVercel:{
      type:new DataTypes.VIRTUAL(DataTypes.BOOLEAN, ['vercelDomainId']),
      get :function() {
        return this.get('vercelDomainId').length ? true : false
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

  Domain.addHook('beforeDestroy', 'removeFromVercel', async (e, options) => {
    if(e.vercelDomainId)  {
      try {
        await e.deleteFromVercel()
      } catch (e) {
        //console.log(`Tried to delete ${e.name} from Vercel, but wasnt found`)
      }
    } 

  })

  return Domain

}


