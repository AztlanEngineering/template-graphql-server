/* @fwrlines/generator-graphql-server-type 2.4.5 */
const tableName = 'business_shops' //Should equal the one defined in models

async function up(queryInterface, Sequelize) {
  return queryInterface.createTable(tableName, {
    id:{
      type      :Sequelize.DataTypes.UUID,
      primaryKey:true,
      allowNull :false,
    },

    name:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    publicPhoneNumber:{
      type:Sequelize.DataTypes.BIGINT,
    },

    privatePhoneNumber:{
      type:Sequelize.DataTypes.BIGINT,
    },

    address:{
      type:Sequelize.DataTypes.STRING,
    },

    address2:{
      type:Sequelize.DataTypes.STRING,
    },

    city:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    postcode:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
    },

    country:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false
    },

    regularOpeningTimes:{
      type        :Sequelize.DataTypes.JSON,
      defaultValue:{
        1:false,
        2:false,
        3:false,
        4:false,
        5:false,
        6:false,
        7:false,
      },
      //field:'column_name_here'
    },

    specialOpeningTimes:{
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
}

async function down(queryInterface, Sequelize) {
  return queryInterface.dropTable(tableName)
}

module.exports = { up, down }
