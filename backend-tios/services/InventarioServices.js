import repo from '../repository/InventarioRepository.js';
import repoPersona from '../repository/PersonaRepository.js';
import serviceTransaccion from './TransaccionServices.js'
import repoTransaccion_elementos from '../repository/transaccion_elementosRepository.js'
import { baseService } from './baseServices.js';

const service = baseService(repo);

service.purchase = async (data) => {
  const { createdBy, ruc, nombre, mail, telefono, inventario, obra } = data;

  let persona = await repoPersona.findByCedRUC(ruc);

  if (persona && !persona.proveedor) {
    await repoPersona.update({ proveedor: true, updatedBy: createdBy });
  } else if (!persona) {
    persona = await repoPersona.create({
      nombre,
      ruc,
      mail,
      telefono,
      proveedor: true,
      createdBy
    });
  }

  const transaccion = await serviceTransaccion.create({
    id_empleado: createdBy,
    id_persona: persona.id,
    id_obra: obra,
    tipo: "Compra"
  });

  for (const elemento of inventario) {
    const nuevoElemento = await repo.create({
      precio: elemento.precio,
      descuento: 0,
      cantidad: elemento.cantidad,
      id_categoria: elemento.id_categoria,
      id_ubicacion: elemento.id_ubicacion,
      id_proveedor: persona.id,
      estado: elemento.estado || null,
      createdBy
    });

    await repoTransaccion_elementos.create({
      id_transaccion: transaccion.id,
      id_elementos: nuevoElemento.id,
      cantidad: nuevoElemento.cantidad
    });
  }
  return transaccion;
};

service.sell = async (data) => {
  const { createdBy, ruc, nombre, mail, telefono, inventario, obra, porcentaje } = data;

  let persona = await repoPersona.findByCedRUC(ruc);

  if (persona && !persona.proveedor) {
    await repoPersona.update({ proveedor: false, updatedBy: createdBy });
  } else if (!persona) {
    persona = await repoPersona.create({
      nombre,
      ruc,
      mail,
      telefono,
      proveedor: false,
      createdBy
    });
  }

  const transaccion = await serviceTransaccion.create({
    id_empleado: createdBy,
    id_persona: persona.id,
    id_obra: obra,
    potcentaje: porcentaje,
    tipo: "Venta"
  });

  for (const elemento of inventario) {
    await repoTransaccion_elementos.create({
      id_transaccion: transaccion.id,
      id_elementos: elemento.id,
      cantidad: elemento.cantidad
    });
  }

  return transaccion;
};

export default service;