const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('registro_acceso', {
    registro_acceso_id: {
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
    fecha_inicio_sesion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin_sesion: {
      type: DataTypes.DATE,
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
    tableName: 'registro_acceso',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "registro_acceso_pkey",
        unique: true,
        fields: [
          { name: "registro_acceso_id" },
        ]
      },
    ]
  });
};
