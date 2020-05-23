/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'
import bcrypt from 'bcrypt'

import { getTokenFor } from '../utils'

export default sequelize => {
  class User extends Model {

    /*
  static classLevelMethod() {
  }

  instanceLevelMethod() {
    return this.first_name
  }
  */

    async setPassword(password) {
      this.passwordHash = await bcrypt.hash(password, 8)
      await this.save()
      return true
    }

    async isPasswordValid(password) {
      return await bcrypt.compare(password, this.passwordHash)
    }

    async getAuthToken() {
      return await getTokenFor(this)
    }

  }

  User.init({
    id:{
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    email:{
      type    :DataTypes.STRING,
      unique  :true,
      validate:{
        isEmail:true
      },
    },
    firstName:{
      type:DataTypes.STRING
    },
    lastName:{
      type:DataTypes.STRING
    },
    username:{
      type  :DataTypes.STRING,
      unique:true
    },
    handle:{
      type  :DataTypes.STRING,
      unique:true
    },
    superuser:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    isActive:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    passwordHash:{
      type:DataTypes.STRING
    },

  },{
    sequelize,
    modelName:'User',
    tableName:'users',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  //freezeTableName: true
  })
  
  User.associate = models => {
    //User.hasMany(models.OAuth2)
  }

  User.addHook('beforeValidate', 'lowercaseEmail', (item, options) => {
    item.email = item.email.toLowerCase()
  })
  
  //User.addHook('afterCreate', 'hookName', (e, options) => {})

  return User
}

