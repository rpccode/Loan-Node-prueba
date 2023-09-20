const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bloqueo_cuenta', {
    bloqueo_id: {
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
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'user_id'
      }
    },
    fecha_bloqueo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    motivo_bloqueo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    intentos_fallidos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bloqueo_cuenta',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "bloqueo_cuenta_pkey",
        unique: true,
        fields: [
          { name: "bloqueo_id" },
        ]
      },
    ]
  });
};
