/* @fwrlines/generator-graphql-server-type 2.1.1 */

import { Sequelize, Model } from 'sequelize'

import { VercelAPI } from '../utils'

import { EmailSender } from 'utils'

//const ORDER_EMAIL_TO = 'adrian.villa.g@gmail.com'
const ORDER_EMAIL_TO = ['meccamico@obambu.com', 'ale+obambu@meccamico.com']
const IS_DRY_ORDER = process.env.DOMAIN_DRY_ORDER === 'true' ? true : false

export default sequelize => {
  class Domain extends Model {
  
    static async isAvailable(domain) {
      const { available } = await VercelAPI.get.isDomainAvailable(domain)
      return available
    }

    async order() {
      //ORDER LOGIN
      const content = JSON.stringify({
        id               :this.id,
        name             :this.name,
        vercelNameservers:this.vercelNameservers,
        vercelDomainId   :this.vercelDomainId,
      }, 
      null,
      2
      )

      const emailOptions = { 
        to     :ORDER_EMAIL_TO,
        subject:`order ${this.name}`,
        text   :`
         ${content}\n
         \n
         A pleasure to do business ~~ Merci !
        `
      }
      const sender = new EmailSender(emailOptions)
      const sent = await sender.send(IS_DRY_ORDER)
      this.isOrdered = true

      if(!sent.accepted || !sent.accepted.length) {
        //TODO this is too artisanal
        this.isError = true
      }

      await this.save()
      return sent.accepted.length > 0
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
      //console.log(this.vercelNameservers, domain.intendedNameservers)
      this.vercelNameservers = domain.intendedNameservers 
      this.isInstalled = false
      await this.save()
      //console.log(this.vercelNameservers, domain.intendedNameservers)
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
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    alt:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    isOrdered:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    isBought:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },
  
    isInstalled:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    isError:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false,
    },

    vercelNameservers:{
      type:Sequelize.DataTypes.JSON,
    },

    vercelTeamId:{
      type        :Sequelize.DataTypes.STRING,
      defaultValue:process.env.VERCEL_TEAM_ID
    },

    vercelDomainId:{
      type:Sequelize.DataTypes.STRING,
    },

    main:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, ['name', 'alt', 'isInstalled']),
      get :function() {
        return this.get('isInstalled') ? this.get('name') : this.get('alt')
      }
    },

    isAddedToVercel:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.BOOLEAN, ['vercelDomainId']),
      get :function() {
        return this.get('vercelDomainId').length ? true : false
      }
    }

  },{
    sequelize,
    modelName:'Domain',
    tableName:'website_domains',
    //freezeTableName: true
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  })

  
  Domain.associate = models => {
    //Domain.belongsTo(models.Site) //this will give a foreign key to B here, and make it available from here
    //models.Site.belongsTo(Domain)
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


