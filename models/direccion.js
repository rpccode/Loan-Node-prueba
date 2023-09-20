const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('direccion', {
    direccion_id: {
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
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    id_ciudad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_provincia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_pais: {
      type: DataTypes.CHAR(3),
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
    tableName: 'direccion',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "direccion_pkey",
        unique: true,
        fields: [
          { name: "direccion_id" },
        ]
      },
    ]
  });
};
