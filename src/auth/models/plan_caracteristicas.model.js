import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model } = Sequelize

export default class Plan_caracteristicasModel extends Model { }

Plan_caracteristicasModel.init({
    plan_caracteristicas_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    'características': {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'caracteristicas',
            key: 'características_id'
        },
        unique: "plan_caracteristicas_características_plan_id_key"
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
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    tableName: 'plan_caracteristicas',
    schema: 'accounts',
});

