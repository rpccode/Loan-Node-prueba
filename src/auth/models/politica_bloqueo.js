import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Politica_bloqueoModel extends Model { }

Politica_bloqueoModel.init({
    politica_id: {
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
            key: 'id'
        }
    },
    max_intentos: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ventana_tiempo_minutos: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    tableName: 'politica_bloqueo',
    schema: 'accounts',
    indexes: [
        {
            name: "politica_bloqueo_pkey",
            unique: true,
            fields: [
                { name: "politica_id" },
            ]
        },
    ]
});

