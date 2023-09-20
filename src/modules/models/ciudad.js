import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class CiudadModel extends Model { }
CiudadModel.init({
    ciudad_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    provincia_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'provincia',
            key: 'provincia_id'
        }
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: 'ciudad',
    indexes: [
        {
            name: "ciudad_pkey",
            unique: true,
            fields: [
                { name: "ciudad_id" },
            ]
        },
    ]
});

