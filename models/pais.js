const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    pais_id: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pais',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pais_pkey",
        unique: true,
        fields: [
          { name: "pais_id" },
        ]
      },
    ]
  });
};
