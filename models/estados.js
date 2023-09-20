const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('estados', {
    estado_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estados',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "estados_pkey",
        unique: true,
        fields: [
          { name: "estado_id" },
        ]
      },
    ]
  });
};
