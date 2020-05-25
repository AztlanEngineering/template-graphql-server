const tableName = 'website_domains' //Should equal the one defined in models

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
      unique   :true
    },

    alt:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },

    isOrdered:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },

    isBought:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
  
    isInstalled:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },

    isError:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },

    vercelNameservers:{
      type:Sequelize.DataTypes.JSON,
    },

    vercelTeamId:{
      type:Sequelize.DataTypes.STRING,
    },

    vercelDomainId:{
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
