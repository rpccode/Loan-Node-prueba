import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class PréstamoModel extends Model { }

PréstamoModel.init({
    loan_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    prestatario_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'prestatario',
            key: 'prestatario_id'
        }
    },
    monto: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    'tasa_de_interés': {
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    'términos': {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fecha_solicitud: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    'fecha_aprobación': {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    fecha_vencimiento: {
        type: DataTypes.DATEONLY,
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
    modelName: 'préstamo',
    indexes: [
        {
            name: "préstamo_pkey",
            unique: true,
            fields: [
                { name: "loan_id" },
            ]
        },
    ]
});

