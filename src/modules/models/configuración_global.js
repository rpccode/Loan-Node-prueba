import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Configuración_globalModel extends Model { }
Configuración_globalModel.init({
    config_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre_config: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    valor_config: {
        type: DataTypes.TEXT,
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
    modelName: 'configuración_global',
    indexes: [
        {
            name: "configuración_global_pkey",
            unique: true,
            fields: [
                { name: "config_id" },
            ]
        },
    ]
});

