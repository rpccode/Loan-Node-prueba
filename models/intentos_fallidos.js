const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('intentos_fallidos', {
    intento_id: {
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
    fecha_intento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    resultado_intento: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'intentos_fallidos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "intentos_fallidos_pkey",
        unique: true,
        fields: [
          { name: "intento_id" },
        ]
      },
    ]
  });
};
