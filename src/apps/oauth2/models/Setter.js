/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, Model } from 'sequelize'

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
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    expires:{
      type        :Sequelize.DataTypes.DATE,
      defaultValue:getDefaultExpireTime
    },
    useToLogin:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
      defaultValue:false
    },
    code:{
      type        :Sequelize.DataTypes.STRING,
      allowNull   :false,
      defaultValue:() => randomString(64),
      unique      :true
    },
    provider:{
      type:Sequelize.DataTypes.STRING
    },
    isValid:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.BOOLEAN, 'expires'),
      get() {
        return this.get('expires') >= Date.now()
      }
    }

  },{
    sequelize,
    modelName:'OAuth2Setter',
    tableName:'oauth2_setters',
    updatedAt:'updatedAt',
    createdAt:'createdAt'
  })

  Setter.associate = models => {
    models.User.hasMany(Setter, {
      targetKey :'id',
      foreignKey:{
        name:'userId',
        type:Sequelize.DataTypes.UUID,
        //allowNull:false
      }
    })
    Setter.belongsTo(models.User, {
      targetKey :'id',
      foreignKey:{
        name:'userId',
        type:Sequelize.DataTypes.UUID,
        //allowNull:false
      }
    })
  }

  return Setter
}


