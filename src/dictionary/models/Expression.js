/* @fwrlines/generator-graphql-server-type 2.4.6 */
import { Sequelize, Model } from 'sequelize'

export default sequelize => {
  class Expression extends Model {
  
    /*
    static classLevelMethod() {
    }
  
    instanceLevelMethod() {
      return this.first_name
    }
    */
  
  } 
  
  Expression.init({
    id:{
      type        :Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.UUIDV4,
      //type: Sequelize.DataTypes.INTEGER,
      //autoIncrement: true,
      primaryKey  :true,
      allowNull   :false,
    },

    name:{
      type     :Sequelize.DataTypes.TEXT,
      allowNull:false,
      //unique:true
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    sourceName:{
      type:Sequelize.DataTypes.STRING,
    },

    sourceLink:{
      type:Sequelize.DataTypes.TEXT,
    },

    date:{
      type:Sequelize.DataTypes.DATE,
    },

    location:{
      type:Sequelize.DataTypes.STRING,
    },

    attributes:{
      type:Sequelize.DataTypes.TEXT,
    },

    definition:{
      type:Sequelize.DataTypes.TEXT,
    },

    usage:{
      type:Sequelize.DataTypes.TEXT,
    },

    isActive:{
      type        :Sequelize.DataTypes.BOOLEAN,
      defaultValue:false,
      allowNull   :false,
    },

    data:{
      type:Sequelize.DataTypes.JSON,
    }

  
  },{
    sequelize,
    modelName:'DictionaryExpression',
    tableName:'dictionary_expressions',
    updatedAt:'updatedAt',
    createdAt:'createdAt',
    //freezeTableName: true
  })

  
  Expression.associate = models => {
    Expression.belongsTo(models.DictionaryAuthor, {
      as        :'author',
      targetKey :'id',
      foreignKey:{
        name:'authorId',
        type:Sequelize.Sequelize.DataTypes.UUID,
      }
    })

    models.DictionaryAuthor.hasMany(Expression, {
      as        :'expressions',
      targetKey :'id',
      foreignKey:{
        name:'authorId',
        type:Sequelize.Sequelize.DataTypes.UUID,
        //allowNull:false
      },
      onDelete:'CASCADE', //RESTRICT, SET_NULL, CASCADE, SET DEFAULT
      //'onUpdate':'CASCADE', //RESTRICT, SET_NULL, SET DEFAULT
      
    }) //this will give a foreign key to user here, and make it available from here

    models.DictionaryTag.belongsToMany(Expression, {
      as        :'expressions',
      through   :'dictionary_expressions_tags',
      foreignKey:{
        name:'expressionId',
        type:Sequelize.Sequelize.DataTypes.UUID,
      },
      otherKey:{
        name:'tagId',
        type:Sequelize.Sequelize.DataTypes.UUID,
      }
    })

    Expression.belongsToMany(models.DictionaryTag, {
      as        :'tags',
      through   :'dictionary_expressions_tags',
      foreignKey:{
        name:'tagId',
        type:Sequelize.Sequelize.DataTypes.UUID,
      },
      otherKey:{
        name:'expressionId',
        type:Sequelize.Sequelize.DataTypes.UUID,
      }
    })
  }

  return Expression

  //Expression.addHook('afterCreate', 'hookName', (e, options) => {})
}


