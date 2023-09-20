const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_funcionalidad', {
    plan_funcionalidad_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'plan',
        key: 'plan_id'
      }
    },
    funcionalidad_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'funcionalidad',
        key: 'funcionalidad_id'
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
    tableName: 'plan_funcionalidad',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "plan_funcionalidad_pkey",
        unique: true,
        fields: [
          { name: "plan_funcionalidad_id" },
        ]
      },
    ]
  });
};
