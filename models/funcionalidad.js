const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('funcionalidad', {
    funcionalidad_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_funcionalidad: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'descripción': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estados',
        key: 'estado_id'
      }
    }
  }, {
    sequelize,
    tableName: 'funcionalidad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "funcionalidad_pkey",
        unique: true,
        fields: [
          { name: "funcionalidad_id" },
        ]
      },
    ]
  });
};
