const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('caracteristicas', {
    'características_id': {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo: {
      type: "\"CHAR\"",
      allowNull: false
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'estado_id'
      }
    }
  }, {
    sequelize,
    tableName: 'caracteristicas',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "caracteristicas_pkey",
        unique: true,
        fields: [
          { name: "características_id" },
        ]
      },
    ]
  });
};
