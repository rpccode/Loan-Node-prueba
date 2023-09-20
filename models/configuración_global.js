const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('configuración_global', {
    config_id: {
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
    nombre_config: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor_config: {
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
    tableName: 'configuración_global',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "configuración_global_pkey",
        unique: true,
        fields: [
          { name: "config_id" },
        ]
      },
    ]
  });
};
