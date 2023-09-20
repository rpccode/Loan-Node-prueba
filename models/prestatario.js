const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prestatario', {
    prestatario_id: {
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
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'correo_electrónico': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'dirección': {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'direccion',
        key: 'direccion_id'
      }
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
    tableName: 'prestatario',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "prestatario_pkey",
        unique: true,
        fields: [
          { name: "prestatario_id" },
        ]
      },
    ]
  });
};
