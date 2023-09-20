const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('plan_caracteristicas', {
    plan_caracteristicas_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    'características': {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'caracteristicas',
        key: 'características_id'
      },
      unique: "plan_caracteristicas_características_plan_id_key"
    },
    estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estados',
        key: 'estado_id'
      }
    },
    plan_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'plan_caracteristicas',
    schema: 'public',
    timestamps: false
  });
};
