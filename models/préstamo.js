const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('préstamo', {
    loan_id: {
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
    prestatario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'prestatario',
        key: 'prestatario_id'
      }
    },
    monto: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    'tasa_de_interés': {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    'términos': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_solicitud: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    'fecha_aprobación': {
      type: DataTypes.DATEONLY,
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
    tableName: 'préstamo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "préstamo_pkey",
        unique: true,
        fields: [
          { name: "loan_id" },
        ]
      },
    ]
  });
};
