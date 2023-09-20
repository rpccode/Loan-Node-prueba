const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('parches_seguridad', {
    parche_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_parche: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'descripción': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'fecha_aplicación': {
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
    tableName: 'parches_seguridad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "parches_seguridad_pkey",
        unique: true,
        fields: [
          { name: "parche_id" },
        ]
      },
    ]
  });
};
