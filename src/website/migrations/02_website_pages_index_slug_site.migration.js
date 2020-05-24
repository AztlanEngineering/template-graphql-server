const tableName = 'website_pages' //Should equal the one defined in models
const indexName = tableName + '_slug_siteId'

async function up(queryInterface, Sequelize) {
  return queryInterface.addIndex(
    tableName, 
    {
      name  :indexName,
      fields:['slug', 'siteId'],
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
