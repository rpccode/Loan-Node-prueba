import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class MensajeModel extends Model { }

MensajeModel.init({
    message_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    emisor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'usuario',
            key: 'user_id'
        }
    },
    receptor_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'usuario',
            key: 'user_id'
        }
    },
    asunto: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    'fecha_envío': {
        type: DataTypes.DATEONLY,
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
    sequelize: db,
    modelName: 'mensaje',
    indexes: [
        {
            name: "mensaje_pkey",
            unique: true,
            fields: [
                { name: "message_id" },
            ]
        },
    ]
});
