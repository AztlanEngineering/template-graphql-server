const tableName = 'auth_tokens' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
    },
    maxAge:{
      type        :Sequelize.DataTypes.INTEGER,
      defaultValue:3600
    },
    token:{
      type     :Sequelize.DataTypes.TEXT,
      allowNull:false
    },

    tokenType:{
      type:Sequelize.DataTypes.STRING,
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
