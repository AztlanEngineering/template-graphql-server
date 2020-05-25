/* @fwrlines/generator-graphql-server-type 2.4.6 */
const tableName = 'dictionary_authors' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
    },

    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    altName:{
      type     :Sequelize.DataTypes.STRING,
    },

    publicPicture:{
      type:Sequelize.DataTypes.TEXT,
    },

    authorityLink:{
      type:Sequelize.DataTypes.TEXT,
    },

    publicLink:{
      type:Sequelize.DataTypes.TEXT,
    },

    description:{
      type:Sequelize.DataTypes.TEXT,
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
