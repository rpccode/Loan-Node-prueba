const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan', {
    plan_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_plan: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    'descripción': {
      type: DataTypes.TEXT,
      allowNull: false
    },
    precio_mensual: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    precio_anual: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'estado_id'
      }
    }
  }, {
    sequelize,
    tableName: 'plan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plan_pkey",
        unique: true,
        fields: [
          { name: "plan_id" },
        ]
      },
    ]
  });
};
