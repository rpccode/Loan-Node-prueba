import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class CuotaModel extends Model { }

CuotaModel.init({
    cuota_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    'préstamo_id': {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'préstamo',
            key: 'loan_id'
        }
    },
    'número_cuota': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    monto_cuota: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
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
    modelName: 'cuota',
    indexes: [
        {
            name: "cuota_pkey",
            unique: true,
            fields: [
                { name: "cuota_id" },
            ]
        },
    ]
});

