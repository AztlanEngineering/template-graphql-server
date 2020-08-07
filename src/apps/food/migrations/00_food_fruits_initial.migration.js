/* @fwrlines/generator-graphql-server-type 2.8.1 */
const tableName = 'food_fruits' //Should equal the one defined in models

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

    taste:{
      type:Sequelize.DataTypes.STRING,
    },

    edible:{
      type        :Sequelize.DataTypes.BOOLEAN,
      allowNull   :false,
    },

    pricePerKilo:{
      type        :Sequelize.DataTypes.FLOAT,
      defaultValue:1,
      allowNull   :false,
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
