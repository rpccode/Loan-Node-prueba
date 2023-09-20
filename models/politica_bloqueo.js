const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('politica_bloqueo', {
    politica_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tenant',
        key: 'tenant_id'
      }
    },
    max_intentos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ventana_tiempo_minutos: {
      type: DataTypes.INTEGER,
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
    tableName: 'politica_bloqueo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "politica_bloqueo_pkey",
        unique: true,
        fields: [
          { name: "politica_id" },
        ]
      },
    ]
  });
};
