import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class Registro_actividadesModel extends Model { }

Registro_actividadesModel.init({
    registro_id: {
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
    'acción_realizada': {
        type: DataTypes.TEXT,
        allowNull: true
    },
    fecha_hora: {
        type: DataTypes.DATE,
        allowNull: true
    },
    'detalles_acción': {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    sequelize: db,
    tableName: 'registro_actividades',
    schema: 'accounts',
    indexes: [
        {
            name: "registro_actividades_pkey",
            unique: true,
            fields: [
                { name: "registro_id" },
            ]
        },
    ]
});

