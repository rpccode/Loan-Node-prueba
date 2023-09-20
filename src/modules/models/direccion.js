import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class DireccionModel extends Model { }

DireccionModel.init({
    direccion_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    id_ciudad: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_provincia: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_pais: {
        type: DataTypes.CHAR(3),
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
    modelName: 'direccion',
    indexes: [
        {
            name: "direccion_pkey",
            unique: true,
            fields: [
                { name: "direccion_id" },
            ]
        },
    ]
});

