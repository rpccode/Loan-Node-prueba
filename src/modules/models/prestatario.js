import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class PrestatarioModel extends Model { }

PrestatarioModel.init({
    prestatario_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    'correo_electrónico': {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    'dirección': {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'direccion',
            key: 'direccion_id'
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
    sequelize: db,
    modelName: 'prestatario',
    timestamps: false,
    indexes: [
        {
            name: "prestatario_pkey",
            unique: true,
            fields: [
                { name: "prestatario_id" },
            ]
        },
    ]
});
