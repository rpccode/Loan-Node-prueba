import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class PaisModel extends Model { }

PaisModel.init({
    pais_id: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'pais',
    indexes: [
        {
            name: "pais_pkey",
            unique: true,
            fields: [
                { name: "pais_id" },
            ]
        },
    ]
});

