/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default (sequelize) => {
  class OAuth2 extends Model {
  }

  OAuth2.init({
    id:{
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    access_token:{
      type:DataTypes.STRING
    },
    refresh_token:{
      type:DataTypes.STRING
    },
    provider:{
      type:DataTypes.STRING
    },
    scope:{
      type:DataTypes.STRING
    },
    locale:{
      type:DataTypes.STRING
    },
    name:{
      type:DataTypes.STRING
    },
    email:{
      type:DataTypes.STRING
    },
    email_verified:{
      type        :DataTypes.BOOLEAN,
      defaultValue:false
    },
    expires:{
      type:DataTypes.DATE
    }

  },{
    sequelize,
    modelName:'OAuth2',
    tableName:'oauth2'
  //freezeTableName: true
  })

  OAuth2.associate = models => {
    //reverse association to keep this package independent from auth
    models.User.hasMany(OAuth2)
  }

  return OAuth2
}

