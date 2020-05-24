const tableName = 'oauth2_setters' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
    },
    expires:{
      type:Sequelize.DataTypes.DATE,
    },
    useToLogin:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    code:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    provider:{
      type:Sequelize.DataTypes.STRING
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
