/* @fwrlines/generator-graphql-server-type 2.4.6 */
const tableName = 'dictionary_expressions_tags' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {

    tagId:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true
    },

    expressionId:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true
      //field:'column_name_here'
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
