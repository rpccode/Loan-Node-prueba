import Sequelize from 'sequelize'
import { sequelizeInstance as db } from '../../config'
const { DataTypes, Model, NOW } = Sequelize

export default class DocumentoModel extends Model { }

DocumentoModel.init({
    doc_id: {
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
    nombre_documento: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    ruta_archivo: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    fecha_subida: {
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
    modelName: 'documento',
    indexes: [
        {
            name: "documento_pkey",
            unique: true,
            fields: [
                { name: "doc_id" },
            ]
        },
    ]
});

