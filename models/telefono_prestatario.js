const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefono_prestatario', {
    prestatario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'prestatario',
        key: 'prestatario_id'
      }
    },
    tenant_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tenant',
        key: 'tenant_id'
      }
    },
    telefono: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'telefono',
        key: 'telefono_id'
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
    tableName: 'telefono_prestatario',
    schema: 'public',
    timestamps: false
  });
};
