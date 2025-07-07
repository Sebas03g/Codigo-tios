import repo from '../repository/InventarioRepository.js';
import repoPersona from '../repository/PersonaRepository.js';
import repoTransaccion from '../repository/TransaccionRepository.js';
import serviceTransaccion from './TransaccionServices.js'
import repoTransaccion_elementos from '../repository/transaccion_elementosRepository.js'
import { baseService } from './baseServices.js';

const service =  baseService(repo);

service.purchase = async(data) => {
    let persona = await repoPersona.findByCedRUC(data.ruc);

    if(persona && !persona.proveedor){
        repoPersona.update({proveedor: true, updatedBy: createdBy});
    }else{
        const createPersona = {
            nombre: data.nombre,
            ruc: data.ruc,
            mail: data.mail,
            telefono: data.telefono,
            proveedor: true,
            createdBy: createdBy
        }

        persona = repoPersona.create(createPersona);
    }

    const dataPurchase = {
        precio: data.precio,
        descuento: data.descuento,
        cantidad: data.cantidad,
        id_categoria: data.id_categoria,
        id_ubicacion: data.id_ubicacion,
        id_proveedor: persona.id,
        estado: data.estado ? data.estado : null,
        createdBy: data.createdBy
    }

    repo.create(dataPurchase);

    const dataTransacction = {
        id_empleado: data.createdBy,
        id_persona: persona.id,
        id_obra: data.obra,
        tipo: "Compra",
    }

    serviceTransaccion

}

service.sell = async(dato) => {

}

export default service;