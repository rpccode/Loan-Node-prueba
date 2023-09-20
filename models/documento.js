const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('documento', {
    doc_id: {
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
    nombre_documento: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ruta_archivo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fecha_subida: {
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
    tableName: 'documento',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "documento_pkey",
        unique: true,
        fields: [
          { name: "doc_id" },
        ]
      },
    ]
  });
};
