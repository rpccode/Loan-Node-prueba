import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Parches_seguridadModel extends Model { }

Parches_seguridadModel.init({
    parche_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre_parche: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    'descripción': {
        type: DataTypes.TEXT,
        allowNull: true
    },
    'fecha_aplicación': {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    tableName: 'parches_seguridad',
    schema: 'accounts',
    indexes: [
        {
            name: "parches_seguridad_pkey",
            unique: true,
            fields: [
                { name: "parche_id" },
            ]
        },
    ]
});

