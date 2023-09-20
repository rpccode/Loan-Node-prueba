const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuota', {
    cuota_id: {
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
    'préstamo_id': {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'préstamo',
        key: 'loan_id'
      }
    },
    'número_cuota': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    monto_cuota: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    fecha_vencimiento: {
      type: DataTypes.DATEONLY,
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
    tableName: 'cuota',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cuota_pkey",
        unique: true,
        fields: [
          { name: "cuota_id" },
        ]
      },
    ]
  });
};
