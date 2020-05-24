/* @fwrlines/generator-graphql-server-type 2.4.5 */
const tableName = 'business_shops' //Should equal the one defined in models
const indexName = tableName + '_index_name_city'

async function up(queryInterface, Sequelize) {
  return queryInterface.addIndex(
    tableName,
    {
      name  :indexName,
      fields:['city', 'name'],
      unique:true,
    }
  )
}

async function down(queryInterface, Sequelize) {
  return queryInterface.removeIndex(
    tableName,
    indexName,
  )
}

module.exports = { up, down }
