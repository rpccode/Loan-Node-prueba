import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Telefono_prestatarioModel extends Model { }

Telefono_prestatarioModel.init({
    prestatario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'prestatario',
            key: 'prestatario_id'
        }
    },
    telefono: {
        type: DataTypes.STRING(15),
        allowNull: true,
        references: {
            model: 'telefono',
            key: 'telefono_id'
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
    modelName: 'telefono_prestatario',
    timestamps: false
});

