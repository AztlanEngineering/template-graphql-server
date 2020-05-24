const tableName = 'website_pages' //Should equal the one defined in models

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
      allowNull:true,
    },

    metaData:{
      type:Sequelize.DataTypes.JSON,
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
  //Do not forget to add the custom index after the associations migration
}

async function down(queryInterface, Sequelize) {
  return queryInterface.dropTable(tableName)
}

module.exports = { up, down }
