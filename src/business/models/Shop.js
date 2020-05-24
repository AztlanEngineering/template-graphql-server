/* @fwrlines/generator-graphql-server-type 2.4.5 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Shop extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  Shop.init({
    id:{
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      //type: Sequelize.DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey  :true,
      allowNull   :false,
    },

    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    publicPhoneNumber:{
      type:Sequelize.DataTypes.BIGINT,
      //allowNull: false,
    },

    privatePhoneNumber:{
      type:Sequelize.DataTypes.BIGINT,
    },

    address:{
      type:Sequelize.DataTypes.STRING,
      //allowNull: false,
    },

    address2:{
      type:Sequelize.DataTypes.STRING,
      //allowNull: false,
    },

    city:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    postcode:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    country:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false
    },

    regularOpeningTimes:{
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
      },
      //field:'column_name_here'
    },

    specialOpeningTimes:{
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{}
      //field:'column_name_here'
    },

    data:{
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{},
    },


    closesAt:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.DATE, ['regularOpeningTimes', 'specialOpeningTimes']),
      get() {
        return Date.now()
      }
    },

    opensAt:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.DATE, ['regularOpeningTimes', 'specialOpeningTimes']),
      get() {
        return Date.now()
      }
    },

    isOpenNow:{
      type:new Sequelize.DataTypes.VIRTUAL(Sequelize.DataTypes.BOOLEAN, ['closesAt', 'opensAt']),
      get() {
        return this.get('closesAt') < this.get('opensAt')
      }
    },
  
    /*
    uuid:{
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4
    }
    */
  },{
    sequelize,
    modelName:'Shop',
    tableName:'business_shops',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    indexes  :[
      {
        unique:true,
        fields:['city', 'name']
      }
    ]
    //freezeTableName: true
  })

  
  Shop.associate = models => {
    Shop.belongsTo(models.User, {
      as        :'user',
      targetKey :'id',
      foreignKey:{
        name:'ownerId',
        type:Sequelize.DataTypes.UUID,
      }
    })
    models.User.hasMany(Shop, {
      targetKey :'id',
      as        :'shops',
      foreignKey:{
        name:'ownerId',
        type:Sequelize.DataTypes.UUID,
      }
    })

    Shop.belongsTo(models.Site, {
      as        :'website',
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:Sequelize.DataTypes.UUID,
      }
    })
    models.Site.hasOne(Shop, {
      as        :'business',
      targetKey :'id',
      foreignKey:{
        name:'siteId',
        type:Sequelize.DataTypes.UUID,
      }
    })
    //'onDelete':'SET NULL', //RESTRICT, CASCADE, SET DEFAULT
    //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
      
    //this will give a foreign key to user here, and make it available from here
    //models.User.hasMany() //this will give this model a UserId field and make it available from user
    //The A.hasOne(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the target model (B).
    //The A.belongsTo(B) association means that a One-To-One relationship exists between A and B, with the foreign key being defined in the source model (A).
    //The A.hasMany(B) association means that a One-To-Many relationship exists between A and B, with the foreign key being defined in the target model (B).
    //These three calls will cause Sequelize to automatically add foreign keys to the appropriate models (unless they are already present).
    //The A.belongsToMany(B, { through: 'C' }) association means that a Many-To-Many relationship exists between A and B, using table C as junction table, which will have the foreign keys (aId and bId, for example). Sequelize will automatically create this model C (unless it already exists) and define the appropriate foreign keys on it.
  }

  return Shop

  //Shop.addHook('afterCreate', 'hookName', (e, options) => {})
}


