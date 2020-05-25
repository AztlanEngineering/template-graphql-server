const tableName = 'oauth2_setters' //Should equal the one defined in models
const foreignKeyColumnName = 'userId'
const foreignKeyTableName = 'users'

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
