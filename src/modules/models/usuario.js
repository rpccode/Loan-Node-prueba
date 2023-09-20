import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class UsuarioModel extends Model { }

UsuarioModel.init({
    user_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    'correo_electrónico': {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'rol',
            key: 'rol_id'
        }
    },
    'contraseña': {
        type: DataTypes.STRING(255),
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
    modelName: 'usuario',
    indexes: [
        {
            name: "usuario_pkey",
            unique: true,
            fields: [
                { name: "user_id" },
            ]
        },
    ]
});

