const tableName = 'users' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      allowNull :false,
      primaryKey:true,
    },

    email:{
      type  :Sequelize.DataTypes.STRING,
      unique:true,
    },

    firstName:{
      type:Sequelize.DataTypes.STRING
    },
    lastName:{
      type:Sequelize.DataTypes.STRING
    },
    username:{
      type  :Sequelize.DataTypes.STRING,
      unique:true
    },
    handle:{
      type  :Sequelize.DataTypes.STRING,
      unique:true
    },
    superuser:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    isActive:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    passwordHash:{
      type:Sequelize.DataTypes.STRING
    },

    onboardingStatus:{
      type     :Sequelize.DataTypes.INTEGER,
      allowNull:false,
    },

    createdAt:{
      type     :Sequelize.DataTypes.DATE,
      allowNull:false,
    },
    updatedAt:{
      type     :Sequelize.DataTypes.DATE,
      allowNull:false,
    },

  })
}

async function down(queryInterface, Sequelize) {
  return queryInterface.dropTable(tableName)
}

module.exports = { up, down }
