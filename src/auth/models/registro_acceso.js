import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Registro_accesoModel extends Model { }

Registro_accesoModel.init({
    registro_acceso_id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tenant_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'tenant',
            key: 'id'
        }
    },
    usuario_id: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: 'user_account',
            key: 'id'
        }
    },
    fecha_inicio_sesion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    fecha_fin_sesion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
}, {
    sequelize: db,
    tableName: 'registro_acceso',
    schema: 'accounts',
    indexes: [
        {
            name: "registro_acceso_pkey",
            unique: true,
            fields: [
                { name: "registro_acceso_id" },
            ]
        },
    ]
});

