const tableName = 'makes' //Should equal the one defined in models

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
    slug:{
      type     :Sequelize.DataTypes.STRING,
      allowNull:false,
      unique   :true
    },
    activeFrom:{
      type:Sequelize.DataTypes.STRING
    },
    activeTo:{
      type:Sequelize.DataTypes.STRING
    },
    country:{
      type:Sequelize.DataTypes.STRING
    },
    isCommon:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    isActive:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    car:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    motorcycle:{
      type     :Sequelize.DataTypes.BOOLEAN,
      allowNull:false,
    },
    seotext:{
      type:Sequelize.DataTypes.TEXT
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
