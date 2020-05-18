/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'
import bcrypt from 'bcrypt'

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
      this.password_hash = bcrypt.hash(password, bcrypt.genSaltSync(8))
      await this.save()
      return true
    }
    isPasswordValid(password) {
      return bcrypt.compare(password, this.password_hash)
    }

  }

  User.init({
    id:{
      type         :DataTypes.INTEGER,
      autoIncrement:true,
      primaryKey   :true
    },
    email:{
      type  :DataTypes.STRING,
      unique:true
    },
    first_name:{
      type:DataTypes.STRING
    },
    last_name:{
      type:DataTypes.STRING
    },
    username:{
      type  :DataTypes.STRING,
      unique:true
    },
    username:{
      type  :DataTypes.STRING,
      unique:true
    },
    password_hash:{
      type:DataTypes.STRING
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
    is_active:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    }

  },{
    sequelize,
    modelName:'User'
  //tableName: 'services'
  //freezeTableName: true
  })
  
  User.associate = models => {
    //User.hasMany(models.OAuth2)
  }
  //User.addHook('afterCreate', 'hookName', (e, options) => {})

  return User
}

