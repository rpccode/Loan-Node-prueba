const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auditoria', {
    auditoria_id: {
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
    tabla_afectada: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registro_afectado_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    'acción_realizada': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'user_id'
      }
    },
    fecha_hora: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'detalles_acción': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    valor_anterior: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    valor_nuevo: {
      type: DataTypes.JSONB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auditoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "auditoria_pkey",
        unique: true,
        fields: [
          { name: "auditoria_id" },
        ]
      },
    ]
  });
};
