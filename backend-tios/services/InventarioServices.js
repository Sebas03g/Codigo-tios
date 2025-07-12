import repo from '../repository/InventarioRepository.js';
import repoPersona from '../repository/PersonaRepository.js';
import serviceTransaccion from './TransaccionServices.js';
import repoTransaccion_elementos from '../repository/transaccion_elementosRepository.js';
import repoCategoria from '../repository/CategoriaRepository.js'
import { baseService } from './baseServices.js';
import { CreateCode } from '../utils/CreateCode.js';

const service = baseService(repo);

async function obtenerOcrearPersona({ ruc, nombre, mail, telefono, proveedor, createdBy }) {
  let persona = await repoPersona.findByCedRUC(ruc);

  if (persona) {
    if (persona.proveedor !== proveedor) {
      await repoPersona.update(persona.id, { proveedor:true, updatedBy: createdBy });
    }
  } else {
    persona = await repoPersona.create({
      nombre,
      ruc,
      mail,
      telefono,
      proveedor,
      createdBy,
    });
  }

  return persona;
}

service.purchase = async (data) => {
  const { createdBy, ruc, nombre, mail, telefono, inventario, obra } = data;

  if (!inventario || !Array.isArray(inventario) || inventario.length === 0) {
    throw new Error("Inventario inválido o vacío.");
  }

  const persona = await obtenerOcrearPersona({
    ruc,
    nombre,
    mail,
    telefono,
    proveedor: true,
    createdBy,
  });

  const transaccion = await serviceTransaccion.create({
    id_empleado: createdBy,
    id_persona: persona.id,
    id_obra: obra,
    tipo: "Compra",
    createdBy,
  });

  const operaciones = await Promise.all(
    inventario.map(async (elemento) => {
      let categoria;

      if (elemento.id_categoria !== null && elemento.id_categoria !== undefined) {
        categoria = await repoCategoria.findById(elemento.id_categoria);
      } else {
        if (!elemento.nombre_categoria || !elemento.tipo_categoria || !elemento.tipo_unidad) {
          throw new Error("Faltan datos para crear la categoría.");
        }

        const nuevaCategoria = {
          nombre: elemento.nombre_categoria,
          codigo: CreateCode(elemento.tipo_categoria), 
          descripcion: elemento.descripcion_categoria || "",
          tipo: elemento.tipo_categoria,
          tipo_unidad: elemento.tipo_unidad,
          tiempo: elemento.tiempo || null,
          createdBy,
        };

        categoria = await repoCategoria.create(nuevaCategoria);
        elemento.id_categoria = categoria.id;
      }

      if (categoria.tipo === "Herramienta") {
        const herramientas = Array.from({ length: parseInt(elemento.cantidad) }, async () => {
          const nuevoElemento = await repo.create({
            precio: parseFloat(elemento.precio),
            descuento: 0,
            cantidad: 1,
            id_categoria: elemento.id_categoria,
            id_ubicacion: parseInt(elemento.id_ubicacion),
            id_proveedor: persona.id,
            estado: elemento.estado || null,
            createdBy,
          });

          await repoTransaccion_elementos.create({
            id_transaccion: transaccion.id,
            id_elementos: nuevoElemento.id,
            cantidad: 1,
            createdBy,
          });
        });
        return Promise.all(herramientas);
      } else {
        const nuevoElemento = await repo.create({
          precio: parseFloat(elemento.precio),
          descuento: 0,
          cantidad: parseFloat(elemento.cantidad),
          id_categoria: elemento.id_categoria,
          id_ubicacion: parseInt(elemento.id_ubicacion),
          id_proveedor: persona.id,
          estado: elemento.estado || null,
          createdBy,
        });

        await repoTransaccion_elementos.create({
          id_transaccion: transaccion.id,
          id_elementos: nuevoElemento.id,
          cantidad: nuevoElemento.cantidad,
          createdBy,
        });
      }
    })
  );

  return transaccion;
};



service.sell = async (data) => {
  const { createdBy, ruc, nombre, mail, telefono, inventario, obra, porcentaje } = data;

  if (!inventario || !Array.isArray(inventario) || inventario.length === 0) {
    throw new Error("Inventario inválido o vacío.");
  }

  const persona = await obtenerOcrearPersona({
    ruc,
    nombre,
    mail,
    telefono,
    proveedor: false,
    createdBy,
  });

  const transaccion = await serviceTransaccion.create({
    id_empleado: createdBy,
    id_persona: persona.id,
    id_obra: obra,
    porcentaje,
    tipo: "Venta",
    createdBy,
  });

  for (const elemento of inventario) {
    await repoTransaccion_elementos.create({
      id_transaccion: transaccion.id,
      id_elementos: elemento.id,
      cantidad: elemento.cantidad,
      createdBy,
    });
  }

  return transaccion;
};

export default service;
