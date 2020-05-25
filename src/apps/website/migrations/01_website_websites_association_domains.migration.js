const tableName = 'websites' //Should equal the one defined in models
const foreignKeyColumnName = 'domainName'
const foreignKeyTableName = 'website_domains'

async function up(queryInterface, Sequelize) {
  return queryInterface.addColumn(
    tableName, 
    foreignKeyColumnName,
    {
      type      :Sequelize.DataTypes.STRING,
      references:{
        model:foreignKeyTableName,
        key  :'name',
      },
      onUpdate:'CASCADE',
      onDelete:'SET NULL'
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
