const tableName = 'website_pages' //Should equal the one defined in models
const foreignKeyColumnName = 'siteId'
const foreignKeyTableName = 'websites'

async function up(queryInterface, Sequelize) {
  return queryInterface.addColumn(
    tableName, 
    foreignKeyColumnName,
    {
      type      :Sequelize.DataTypes.UUID,
      references:{
        model:foreignKeyTableName,
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
