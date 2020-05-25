/* @fwrlines/generator-graphql-server-type 2.4.6 */
const tableName = 'dictionary_expressions' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
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
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },

    data:{
      type:Sequelize.DataTypes.JSON,
    },

    createdAt:{
      type     :Sequelize.DataTypes.DATE,
      allowNull:false,
    },
    updatedAt:{
      type     :Sequelize.DataTypes.DATE,
      allowNull:false,
    }

  })
}

async function down(queryInterface, Sequelize) {
  return queryInterface.dropTable(tableName)
}

module.exports = { up, down }
