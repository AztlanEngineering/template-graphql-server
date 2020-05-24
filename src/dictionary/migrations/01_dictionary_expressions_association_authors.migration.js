/* @fwrlines/generator-graphql-server-type 2.4.6 */
const tableName = 'dictionary_expressions' //Should equal the one defined in models
const foreignKeyColumnName = 'authorId'
const foreignModelTableName = 'dictionary_authors'

async function up(queryInterface, Sequelize) {
  return queryInterface.addColumn(
    tableName,
    foreignKeyColumnName,
    {
      type      :Sequelize.DataTypes.UUID,
      references:{
        model:foreignModelTableName,
        key  :'id',
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    }

  )
}

async function down(queryInterface, Sequelize) {
  return queryInterface.removeColumn(
    tableName,
    foreignKeyColumnName
  )
}

module.exports = { up, down }

