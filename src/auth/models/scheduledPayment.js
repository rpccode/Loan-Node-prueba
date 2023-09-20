import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class ScheduledPaymentModel extends Model { }

ScheduledPaymentModel.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    suscripcion_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'suscripcion',
            key: 'id_suscripcion'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    monto: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW()
    },
    is_pagado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW()
    },
    update_at: {
        type: DataTypes.DATE,
    }
}, {
    sequelize: db,
    modelName: 'Scheduled_Payment',
    schema: 'accounts'
})