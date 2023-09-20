import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class CaracteristicasModel extends Model { }

CaracteristicasModel.init({
    'características_id': {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipo: {
        type: DataTypes.ENUM('C', 'F'),
        allowNull: false
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    modelName: 'caracteristicas',
    schema: 'accounts',
    indexes: [
        {
            name: "caracteristicas_pkey",
            unique: true,
            fields: [
                { name: "características_id" },
            ]
        },
    ]
});
