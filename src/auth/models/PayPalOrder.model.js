import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class PayPalOrderModel extends Model { }

PayPalOrderModel.init({
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
    payment_id: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2), // Ajusta la precisión según tus necesidades
        allowNull: false,
    },
    currency: {
        type: DataTypes.STRING(3), // Ejemplo: 'USD'
        allowNull: false,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    sequelize: db,
    modelName: 'PayPalOrder',
    schema: 'accounts'
})