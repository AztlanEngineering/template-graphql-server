const tableName = 'services' //Should equal the one defined in models

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
    category:{
      type:Sequelize.DataTypes.STRING
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
    genericCta:{
      type:Sequelize.DataTypes.TEXT
    },
    carButton:{
      type:Sequelize.DataTypes.STRING
    },
    motoButton:{
      type:Sequelize.DataTypes.STRING
    },
    seotext:{
      type:Sequelize.DataTypes.TEXT
    },

    icon:{
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
