import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Bloqueo_cuentaModel extends Model { }
Bloqueo_cuentaModel.init({
    bloqueo_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    usuario_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'user_account',
            key: 'id'
        }
    },
    fecha_bloqueo: {
        type: DataTypes.DATE,
        allowNull: true
    },
    motivo_bloqueo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    intentos_fallidos: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'bloqueo_cuenta',
    schema: 'accounts',
    indexes: [
        {
            name: "bloqueo_cuenta_pkey",
            unique: true,
            fields: [
                { name: "bloqueo_id" },
            ]
        },
    ]
});

