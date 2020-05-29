const tableName = 'oauth2_profiles' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
    },
    /*
    accessToken:{
      type:Sequelize.DataTypes.STRING
    },
    */
    refreshToken:{
      type:Sequelize.DataTypes.STRING
    },
    provider:{
      type:Sequelize.DataTypes.STRING
    },
    picture:{
      type:Sequelize.DataTypes.TEXT
    },
    scope:{
      type:Sequelize.DataTypes.STRING
    },
    locale:{
      type:Sequelize.DataTypes.STRING
    },
    name:{
      type:Sequelize.DataTypes.STRING
    },
    email:{
      type:Sequelize.DataTypes.STRING
    },
    emailVerified:{
      type:Sequelize.DataTypes.BOOLEAN,
    },
    expires:{
      type:Sequelize.DataTypes.DATE
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
