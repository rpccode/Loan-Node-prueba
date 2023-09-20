
import EstadosModel from './estados';
import PaisModel from './pais';
import ProvinciaModel from './provincia';
import CiudadModel from './ciudad';
import Configuración_globalModel from './configuración_global';
import DireccionModel from './direccion';
import PrestatarioModel from './prestatario';
import RolModel from './rol';
import UsuarioModel from './usuario';
import TelefonoModel from './telefono';
import Telefono_prestatarioModel from './telefono_prestatario';
import PréstamoModel from './préstamo';
import DocumentoModel from './documento';
import CuotaModel from './cuota';
import MensajeModel from './mensaje';



async function initModels(schemaName) {

    await EstadosModel.schema(schemaName).sync()
    await RolModel.schema(schemaName).sync()
    await UsuarioModel.schema(schemaName).sync()
    await PaisModel.schema(schemaName).sync()
    await ProvinciaModel.schema(schemaName).sync()
    await CiudadModel.schema(schemaName).sync()
    await DireccionModel.schema(schemaName).sync()
    await Configuración_globalModel.schema(schemaName).sync()
    await PrestatarioModel.schema(schemaName).sync()
    await TelefonoModel.schema(schemaName).sync()
    await Telefono_prestatarioModel.schema(schemaName).sync()
    await PréstamoModel.schema(schemaName).sync()
    await MensajeModel.schema(schemaName).sync()
    await DocumentoModel.schema(schemaName).sync()
    await CuotaModel.schema(schemaName).sync()

    PrestatarioModel.belongsTo(DireccionModel, { as: "dirección_direccion", foreignKey: "dirección" });
    DireccionModel.hasMany(PrestatarioModel, { as: "prestatarios", foreignKey: "dirección" });
    Configuración_globalModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(Configuración_globalModel, { as: "configuración_globals", foreignKey: "estado" });
    CuotaModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(CuotaModel, { as: "cuota", foreignKey: "estado" });
    DireccionModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(DireccionModel, { as: "direccions", foreignKey: "estado" });
    DocumentoModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel
        .hasMany(DocumentoModel, { as: "documentos", foreignKey: "estado" });
    MensajeModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(MensajeModel, { as: "mensajes", foreignKey: "estado" });
    PrestatarioModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(PrestatarioModel, { as: "prestatarios", foreignKey: "estado" });
    PréstamoModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(PréstamoModel, { as: "préstamos", foreignKey: "estado" });
    RolModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(RolModel, { as: "rols", foreignKey: "estado" });
    Telefono_prestatarioModel.belongsTo(EstadosModel, { as: "estado_estado", foreignKey: "estado" });
    EstadosModel.hasMany(Telefono_prestatarioModel, { as: "telefono_prestatarios", foreignKey: "estado" });
    ProvinciaModel.belongsTo(PaisModel, { as: "pai", foreignKey: "pais_id" });
    PaisModel.hasMany(ProvinciaModel, { as: "Provincia", foreignKey: "pais_id" });
    PréstamoModel.belongsTo(PrestatarioModel, { as: "prestatario", foreignKey: "prestatario_id" });
    PrestatarioModel.hasMany(PréstamoModel, { as: "préstamos", foreignKey: "prestatario_id" });
    Telefono_prestatarioModel.belongsTo(PrestatarioModel, { as: "prestatario", foreignKey: "prestatario_id" });
    PrestatarioModel.hasMany(Telefono_prestatarioModel, { as: "telefono_prestatarios", foreignKey: "prestatario_id" });
    CiudadModel.belongsTo(ProvinciaModel, { as: "provincia", foreignKey: "provincia_id" });
    ProvinciaModel.hasMany(CiudadModel, { as: "ciudads", foreignKey: "provincia_id" });
    CuotaModel.belongsTo(PréstamoModel, { as: "préstamo", foreignKey: "préstamo_id" });
    PréstamoModel.hasMany(CuotaModel, { as: "cuota", foreignKey: "préstamo_id" });
    DocumentoModel.belongsTo(PréstamoModel, { as: "préstamo", foreignKey: "préstamo_id" });
    PréstamoModel.hasMany(DocumentoModel, { as: "documentos", foreignKey: "préstamo_id" });
    UsuarioModel.belongsTo(RolModel, { as: "rol_rol", foreignKey: "rol" });
    RolModel.hasMany(UsuarioModel, { as: "usuarios", foreignKey: "rol" });
    Telefono_prestatarioModel.belongsTo(TelefonoModel, { as: "telefono_telefono", foreignKey: "telefono" });
    TelefonoModel.hasMany(Telefono_prestatarioModel, { as: "telefono_prestatarios", foreignKey: "telefono" });


}
export default initModels;
