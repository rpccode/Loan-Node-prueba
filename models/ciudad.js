const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ciudad', {
    ciudad_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    provincia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'provincia',
        key: 'provincia_id'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ciudad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "ciudad_pkey",
        unique: true,
        fields: [
          { name: "ciudad_id" },
        ]
      },
    ]
  });
};
