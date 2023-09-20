import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config';
const { DataTypes, Model, NOW } = Sequelize

export default class AuditoriaModel extends Model { }
AuditoriaModel.init({
    auditoria_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tabla_afectada: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    registro_afectado_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    'acción_realizada': {
        type: DataTypes.TEXT,
        allowNull: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'usuario',
            key: 'user_id'
        }
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: true
    },
    'detalles_acción': {
        type: DataTypes.TEXT,
        allowNull: true
    },
    valor_anterior: {
        type: DataTypes.JSONB,
        allowNull: true
    },
    valor_nuevo: {
        type: DataTypes.JSONB,
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: 'auditoria',
    indexes: [
        {
            name: "auditoria_pkey",
            unique: true,
            fields: [
                { name: "auditoria_id" },
            ]
        },
    ]
});

