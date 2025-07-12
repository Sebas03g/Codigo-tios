import repo from '../repository/ObraRepository.js';
import { baseService } from './baseServices.js';
import point from '../services/PuntoServices.js';
import persona from '../services/PersonaServices.js';
import serviceProforma from '../services/ProformaServices.js';
import serviceProceso from '../services/ProcesoServices.js';
import serviceProcesoEmpleado from '../services/proceso_empleadosServices.js';
import serviceProcesoHerramienta from '../services/proceso_herramientasServices.js';
import serviceProcesoInventario from '../services/proceso_inventarioServices.js';

const service = baseService(repo);

service.create = async (data) => {
    const data_point = {
        lat:data.lat,
        lng:data.lng,
        createdBy: data.createdBy
    };
    let punto = await point.create(data_point);

    data.id_punto = punto.id;
    delete data.lat;
    delete data.lng;

    const data_persona = {
        nombre: data.nombre,
        ruc: data.ruc,
        mail: data.mail,
        telefono: data.telefono,
        proveedor: false
    }

    let cliente = await persona.create(data_persona);

    data.id_cliente = cliente.id;
    delete data.nombre;
    delete data.ruc;
    delete data.mail;
    delete data.telefono;

    return await repo.create(data);
};

service.assign_proforma = async (id_proforma, id_obra = null) => {
  const proforma = await serviceProforma.dataAllRelations(id_proforma, ["procesos"]);
  let obra;
  if (id_obra == null) {
    const dataObra = {
      nombre: proforma.nombre,
      fecha_final: proforma.fecha_final,
      tipoObra: proforma.tipoObra,
      porcentaje_venta: proforma.porcentaje_venta,
      id_punto: proforma.id_punto,
      id_cliente: proforma.id_cliente,
      id_proforma: proforma.id
    };
    obra = await repo.create(dataObra);
  } else {
    obra = await repo.update(id_obra, { id_proforma: proforma.id });
  }

  for (const p of proforma.procesos) {
    const procesoCompleto = await serviceProceso.dataAllRelations(p.id, ["empleados", "herramientas", "inventario"]);

    const dataProceso = {
      nombre: procesoCompleto.nombre,
      descripcion: procesoCompleto.descripcion,
      id_obra: obra.id
    };

    const nuevoProceso = await serviceProceso.create(dataProceso);

    const empleadosPromises = procesoCompleto.empleados.map((empleado) =>
      serviceProcesoEmpleado.create({
        horas: empleado.horas,
        sueldo: empleado.sueldo,
        id_proceso: nuevoProceso.id,
        id_empleado: empleado.id
      })
    );

    const herramientasPromises = procesoCompleto.herramientas.map((herramienta) =>
      serviceProcesoHerramienta.create({
        horas: herramienta.horas,
        descuento: herramienta.descuento,
        precio: herramienta.precio,
        id_proceso: nuevoProceso.id,
        id_herramienta: herramienta.id_herramienta
      })
    );

    const inventarioPromises = procesoCompleto.inventario.map((elemento) =>
      serviceProcesoInventario.create({
        cantidad: elemento.cantidad,
        descuento: elemento.descuento,
        precio: elemento.precio,
        id_proceso: nuevoProceso.id,
        id_elemento: elemento.id
      })
    );

    await Promise.all([
      ...empleadosPromises,
      ...herramientasPromises,
      ...inventarioPromises
    ]);
  }

  return obra;
};


export default service;