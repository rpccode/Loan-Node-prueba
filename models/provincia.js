const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('provincia', {
    provincia_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pais_id: {
      type: DataTypes.CHAR(3),
      allowNull: true,
      references: {
        model: 'pais',
        key: 'pais_id'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'provincia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "provincia_pkey",
        unique: true,
        fields: [
          { name: "provincia_id" },
        ]
      },
    ]
  });
};
