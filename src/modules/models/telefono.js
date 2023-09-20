import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class TelefonoModel extends Model { }

TelefonoModel.init({
    telefono_id: {
        type: DataTypes.STRING(15),
        allowNull: false,
        primaryKey: true
    },
}, {
    sequelize: db,
    modelName: 'telefono',
    indexes: [
        {
            name: "telefono_pkey",
            unique: true,
            fields: [
                { name: "telefono_id" },
            ]
        },
    ]
});

