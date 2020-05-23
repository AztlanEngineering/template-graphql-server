/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, DataTypes, Model } from 'sequelize'

export default sequelize => {
  class Token extends Model {

    async login() {
      //console.log(this)
      if (this.valid && this.use_to_login){
        this.use_to_login = false,
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

  Token.init({
    id:{
      type        :DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    maxAge:{
      type        :DataTypes.INTEGER,
      defaultValue:3600
    },
    token:{
      type     :DataTypes.TEXT,
      allowNull:false
    }

  },{
    sequelize,
    modelName:'Token'
  })

  //Token.addHook('afterCreate', 'hookName', (e, options) => {})
  Token.associate = models => {
    Token.belongsTo(models.User)
  }
  return Token
}


