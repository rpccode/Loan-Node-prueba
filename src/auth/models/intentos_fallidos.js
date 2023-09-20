import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class intentos_fallidosModel extends Model { }

intentos_fallidosModel.init({
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
            key: 'id'
        }
    },
    usuario_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'user_account',
            key: 'id'
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
    sequelize: db,
    modelName: 'intentos_fallidos',
    schema: 'accounts',
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

