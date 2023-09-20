var DataTypes = require("sequelize").DataTypes;
var _auditoria = require("./auditoria");
var _bloqueo_cuenta = require("./bloqueo_cuenta");
var _caracteristicas = require("./caracteristicas");
var _ciudad = require("./ciudad");
var _configuración_global = require("./configuración_global");
var _cuota = require("./cuota");
var _direccion = require("./direccion");
var _documento = require("./documento");
var _estados = require("./estados");
var _funcionalidad = require("./funcionalidad");
var _intentos_fallidos = require("./intentos_fallidos");
var _mensaje = require("./mensaje");
var _pais = require("./pais");
var _parches_seguridad = require("./parches_seguridad");
var _plan = require("./plan");
var _plan_caracteristicas = require("./plan_caracteristicas");
var _plan_funcionalidad = require("./plan_funcionalidad");
var _politica_bloqueo = require("./politica_bloqueo");
var _prestatario = require("./prestatario");
var _provincia = require("./provincia");
var _préstamo = require("./préstamo");
var _registro_acceso = require("./registro_acceso");
var _registro_actividades = require("./registro_actividades");
var _rol = require("./rol");
var _suscripcion = require("./suscripcion");
var _telefono = require("./telefono");
var _telefono_prestatario = require("./telefono_prestatario");
var _tenant = require("./tenant");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var auditoria = _auditoria(sequelize, DataTypes);
  var bloqueo_cuenta = _bloqueo_cuenta(sequelize, DataTypes);
  var caracteristicas = _caracteristicas(sequelize, DataTypes);
  var ciudad = _ciudad(sequelize, DataTypes);
  var configuración_global = _configuración_global(sequelize, DataTypes);
  var cuota = _cuota(sequelize, DataTypes);
  var direccion = _direccion(sequelize, DataTypes);
  var documento = _documento(sequelize, DataTypes);
  var estados = _estados(sequelize, DataTypes);
  var funcionalidad = _funcionalidad(sequelize, DataTypes);
  var intentos_fallidos = _intentos_fallidos(sequelize, DataTypes);
  var mensaje = _mensaje(sequelize, DataTypes);
  var pais = _pais(sequelize, DataTypes);
  var parches_seguridad = _parches_seguridad(sequelize, DataTypes);
  var plan = _plan(sequelize, DataTypes);
  var plan_caracteristicas = _plan_caracteristicas(sequelize, DataTypes);
  var plan_funcionalidad = _plan_funcionalidad(sequelize, DataTypes);
  var politica_bloqueo = _politica_bloqueo(sequelize, DataTypes);
  var prestatario = _prestatario(sequelize, DataTypes);
  var provincia = _provincia(sequelize, DataTypes);
  var préstamo = _préstamo(sequelize, DataTypes);
  var registro_acceso = _registro_acceso(sequelize, DataTypes);
  var registro_actividades = _registro_actividades(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var suscripcion = _suscripcion(sequelize, DataTypes);
  var telefono = _telefono(sequelize, DataTypes);
  var telefono_prestatario = _telefono_prestatario(sequelize, DataTypes);
  var tenant = _tenant(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  plan_caracteristicas.belongsTo(caracteristicas, { as: "características_caracteristica", foreignKey: "características"});
  caracteristicas.hasOne(plan_caracteristicas, { as: "plan_caracteristica", foreignKey: "características"});
  prestatario.belongsTo(direccion, { as: "dirección_direccion", foreignKey: "dirección"});
  direccion.hasMany(prestatario, { as: "prestatarios", foreignKey: "dirección"});
  caracteristicas.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(caracteristicas, { as: "caracteristicas", foreignKey: "estado"});
  configuración_global.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(configuración_global, { as: "configuración_globals", foreignKey: "estado"});
  cuota.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(cuota, { as: "cuota", foreignKey: "estado"});
  direccion.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(direccion, { as: "direccions", foreignKey: "estado"});
  documento.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(documento, { as: "documentos", foreignKey: "estado"});
  funcionalidad.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(funcionalidad, { as: "funcionalidads", foreignKey: "estado"});
  mensaje.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(mensaje, { as: "mensajes", foreignKey: "estado"});
  parches_seguridad.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(parches_seguridad, { as: "parches_seguridads", foreignKey: "estado"});
  plan.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(plan, { as: "plans", foreignKey: "estado"});
  plan_caracteristicas.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(plan_caracteristicas, { as: "plan_caracteristicas", foreignKey: "estado"});
  plan_funcionalidad.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(plan_funcionalidad, { as: "plan_funcionalidads", foreignKey: "estado"});
  politica_bloqueo.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(politica_bloqueo, { as: "politica_bloqueos", foreignKey: "estado"});
  prestatario.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(prestatario, { as: "prestatarios", foreignKey: "estado"});
  préstamo.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(préstamo, { as: "préstamos", foreignKey: "estado"});
  registro_acceso.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(registro_acceso, { as: "registro_accesos", foreignKey: "estado"});
  rol.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(rol, { as: "rols", foreignKey: "estado"});
  suscripcion.belongsTo(estados, { as: "estado", foreignKey: "estado_id"});
  estados.hasMany(suscripcion, { as: "suscripcions", foreignKey: "estado_id"});
  telefono_prestatario.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(telefono_prestatario, { as: "telefono_prestatarios", foreignKey: "estado"});
  tenant.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(tenant, { as: "tenants", foreignKey: "estado"});
  usuario.belongsTo(estados, { as: "estado_estado", foreignKey: "estado"});
  estados.hasMany(usuario, { as: "usuarios", foreignKey: "estado"});
  plan_funcionalidad.belongsTo(funcionalidad, { as: "funcionalidad", foreignKey: "funcionalidad_id"});
  funcionalidad.hasMany(plan_funcionalidad, { as: "plan_funcionalidads", foreignKey: "funcionalidad_id"});
  provincia.belongsTo(pais, { as: "pai", foreignKey: "pais_id"});
  pais.hasMany(provincia, { as: "provincia", foreignKey: "pais_id"});
  plan_funcionalidad.belongsTo(plan, { as: "plan", foreignKey: "plan_id"});
  plan.hasMany(plan_funcionalidad, { as: "plan_funcionalidads", foreignKey: "plan_id"});
  suscripcion.belongsTo(plan, { as: "plan", foreignKey: "plan_id"});
  plan.hasMany(suscripcion, { as: "suscripcions", foreignKey: "plan_id"});
  préstamo.belongsTo(prestatario, { as: "prestatario", foreignKey: "prestatario_id"});
  prestatario.hasMany(préstamo, { as: "préstamos", foreignKey: "prestatario_id"});
  telefono_prestatario.belongsTo(prestatario, { as: "prestatario", foreignKey: "prestatario_id"});
  prestatario.hasMany(telefono_prestatario, { as: "telefono_prestatarios", foreignKey: "prestatario_id"});
  ciudad.belongsTo(provincia, { as: "provincium", foreignKey: "provincia_id"});
  provincia.hasMany(ciudad, { as: "ciudads", foreignKey: "provincia_id"});
  cuota.belongsTo(préstamo, { as: "préstamo", foreignKey: "préstamo_id"});
  préstamo.hasMany(cuota, { as: "cuota", foreignKey: "préstamo_id"});
  documento.belongsTo(préstamo, { as: "préstamo", foreignKey: "préstamo_id"});
  préstamo.hasMany(documento, { as: "documentos", foreignKey: "préstamo_id"});
  usuario.belongsTo(rol, { as: "rol_rol", foreignKey: "rol"});
  rol.hasMany(usuario, { as: "usuarios", foreignKey: "rol"});
  telefono_prestatario.belongsTo(telefono, { as: "telefono_telefono", foreignKey: "telefono"});
  telefono.hasMany(telefono_prestatario, { as: "telefono_prestatarios", foreignKey: "telefono"});
  auditoria.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(auditoria, { as: "auditoria", foreignKey: "tenant_id"});
  bloqueo_cuenta.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(bloqueo_cuenta, { as: "bloqueo_cuenta", foreignKey: "tenant_id"});
  configuración_global.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(configuración_global, { as: "configuración_globals", foreignKey: "tenant_id"});
  cuota.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(cuota, { as: "cuota", foreignKey: "tenant_id"});
  direccion.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(direccion, { as: "direccions", foreignKey: "tenant_id"});
  documento.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(documento, { as: "documentos", foreignKey: "tenant_id"});
  intentos_fallidos.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(intentos_fallidos, { as: "intentos_fallidos", foreignKey: "tenant_id"});
  mensaje.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(mensaje, { as: "mensajes", foreignKey: "tenant_id"});
  politica_bloqueo.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(politica_bloqueo, { as: "politica_bloqueos", foreignKey: "tenant_id"});
  prestatario.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(prestatario, { as: "prestatarios", foreignKey: "tenant_id"});
  préstamo.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(préstamo, { as: "préstamos", foreignKey: "tenant_id"});
  registro_acceso.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(registro_acceso, { as: "registro_accesos", foreignKey: "tenant_id"});
  registro_actividades.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(registro_actividades, { as: "registro_actividades", foreignKey: "tenant_id"});
  suscripcion.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(suscripcion, { as: "suscripcions", foreignKey: "tenant_id"});
  telefono.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(telefono, { as: "telefonos", foreignKey: "tenant_id"});
  telefono_prestatario.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(telefono_prestatario, { as: "telefono_prestatarios", foreignKey: "tenant_id"});
  usuario.belongsTo(tenant, { as: "tenant", foreignKey: "tenant_id"});
  tenant.hasMany(usuario, { as: "usuarios", foreignKey: "tenant_id"});
  auditoria.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(auditoria, { as: "auditoria", foreignKey: "usuario_id"});
  bloqueo_cuenta.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(bloqueo_cuenta, { as: "bloqueo_cuenta", foreignKey: "usuario_id"});
  intentos_fallidos.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(intentos_fallidos, { as: "intentos_fallidos", foreignKey: "usuario_id"});
  mensaje.belongsTo(usuario, { as: "emisor", foreignKey: "emisor_id"});
  usuario.hasMany(mensaje, { as: "mensajes", foreignKey: "emisor_id"});
  mensaje.belongsTo(usuario, { as: "receptor", foreignKey: "receptor_id"});
  usuario.hasMany(mensaje, { as: "receptor_mensajes", foreignKey: "receptor_id"});
  registro_acceso.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(registro_acceso, { as: "registro_accesos", foreignKey: "usuario_id"});
  registro_actividades.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(registro_actividades, { as: "registro_actividades", foreignKey: "usuario_id"});

  return {
    auditoria,
    bloqueo_cuenta,
    caracteristicas,
    ciudad,
    configuración_global,
    cuota,
    direccion,
    documento,
    estados,
    funcionalidad,
    intentos_fallidos,
    mensaje,
    pais,
    parches_seguridad,
    plan,
    plan_caracteristicas,
    plan_funcionalidad,
    politica_bloqueo,
    prestatario,
    provincia,
    préstamo,
    registro_acceso,
    registro_actividades,
    rol,
    suscripcion,
    telefono,
    telefono_prestatario,
    tenant,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
