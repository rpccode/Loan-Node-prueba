import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class EstadosModel extends Model { }

EstadosModel.init({
    estado_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize: db,
    modelName: 'estados',
    indexes: [
        {
            name: "estados_pkey",
            unique: true,
            fields: [
                { name: "estado_id" },
            ]
        },
    ]
});

