/* @fwrlines/generator-graphql-server-type 1.3.1 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Token extends Model {

    /*
    async login() {
      //console.log(this)
      if (this.valid && this.useToLogin){
        this.useToLogin = false,
        await this.save()
        return true
      }
      return false
    }
    */

  /*
  static classLevelMethod() {
  }

  */
  }

  Token.init({
    id:{
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      allowNull   :false,
      primaryKey  :true,
    },
    maxAge:{
      type        :Sequelize.DataTypes.INTEGER,
      defaultValue:3600
    },
    token:{
      type     :Sequelize.DataTypes.TEXT,
      allowNull:false
    },

    _string:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.STRING, ['token']),
      get :function() {
        return this.get('token').slice(0,20) + '...'
      }
    },

  },{
    sequelize,
    modelName:'Token',
    updatedAt:'updatedAt',
    tableName:'auth_tokens',
    createdAt:'createdAt'
  })

  //Token.addHook('afterCreate', 'hookName', (e, options) => {})
  Token.associate = models => {
    Token.belongsTo(models.User, {
      as        :'user',
      targetKey :'id',
      foreignKey:{
        name:'userId',
        type:Sequelize.DataTypes.UUID,
      },
      onDelete:'CASCADE', //RESTRICT, CASCADE, SET DEFAULT
      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
    })
    models.User.hasMany(Token, {
      as        :'tokens',
      targetKey :'id',
      foreignKey:{
        name:'userId',
        type:Sequelize.DataTypes.UUID,
      },
      onDelete:'CASCADE', //RESTRICT, CASCADE, SET DEFAULT
    })
  }
  return Token
}


