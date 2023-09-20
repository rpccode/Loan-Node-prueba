import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class SuscripcionModel extends Model { }

SuscripcionModel.init({
    id_suscripcion: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    tenant_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'tenant',
            key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    plan_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'plan',
            key: 'id'
        },
        onDelete: 'RESTRICT',
        onUpdate: 'CASCADE'
    },
    tipo: {
        type: DataTypes.ENUM('M', 'A'),
        allowNull: false,
        defaultValue: 'M'
    },
    valor: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW()
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW()
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: NOW()
    }
}, {
    indexes: [
        {
            unique: true,
            fields: ['tenant_id'],
        },
    ],
    sequelize: db,
    modelName: 'suscripcion',
    schema: 'accounts'
})