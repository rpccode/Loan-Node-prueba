const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefono', {
    telefono_id: {
      type: DataTypes.STRING(15),
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
    }
  }, {
    sequelize,
    tableName: 'telefono',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "telefono_pkey",
        unique: true,
        fields: [
          { name: "telefono_id" },
        ]
      },
    ]
  });
};
