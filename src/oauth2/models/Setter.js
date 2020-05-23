/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

import { randomString } from 'utils'

const getDefaultExpireTime = () => Date.now() + (Number(process.env.TIME_TO_LOGIN) || 120) * 1000

export default sequelize => {
  class Setter extends Model {

    async login() {
      //console.log(this)
      if (this.isValid && this.useToLogin){
        this.useToLogin = false
        await this.save()
        return true
      }
      return false
    }

  /*
  static classLevelMethod() {
  }

  */
  }

  Setter.init({
    id:{
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    expires:{
      type        :DataTypes.DATE,
      defaultValue:getDefaultExpireTime
    },
    useToLogin:{
      type        :DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    code:{
      type        :DataTypes.STRING,
      allowNull   :false,
      defaultValue:() => randomString(64),
      unique      :true
    },
    provider:{
      type:DataTypes.STRING
    },
    isValid:{
      type:new DataTypes.VIRTUAL(DataTypes.BOOLEAN, 'expires'),
      get() {
        return this.get('expires') >= Date.now()
      }
    }

  },{
    sequelize,
    modelName:'Setter',
    tableName:'oauth2_setters',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  })

  Setter.associate = models => {
    Setter.belongsTo(models.User)
  }

  return Setter
}


