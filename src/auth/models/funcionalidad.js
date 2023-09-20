import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class FuncionalidadModel extends Model { }

FuncionalidadModel.init({
    funcionalidad_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre_funcionalidad: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    'descripción': {
        type: DataTypes.TEXT,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    tableName: 'funcionalidad',
    schema: 'accounts',
    indexes: [
        {
            name: "funcionalidad_pkey",
            unique: true,
            fields: [
                { name: "funcionalidad_id" },
            ]
        },
    ]
});

