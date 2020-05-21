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
  
  } 
  
  Site.init({
    id:{
      type        :DataTypes.UUIDV4,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },

    name:{
      type        :DataTypes.STRING,
      //type: DataTypes.BOOLEAN,
      //type: DataTypes.INTEGER,
      //type: DataTypes.BIGINT,
      allowNull   :false,
      defaultValue:'john',
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
    modelName:'Site',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
    //tableName: 'sites'
    //freezeTableName: true
  })

  
  Site.associate = models => {
    Site.belongsTo(models.User) //this will give a foreign key to user here, and make it available from here
    //models.User.hasMany() //this will give this model a UserId field and make it available from user
  }

  return Site


  //Site.addHook('afterCreate', 'hookName', (e, options) => {})
}


