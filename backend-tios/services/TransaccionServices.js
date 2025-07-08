import repo from '../repository/TransaccionRepository.js';
import serviceCompra from './CompraServices.js';
import serviceVenta from './VentaServices.js';
import serviceDevolucion from './DevolucionServices.js';
import { baseService } from './baseServices.js';

const service = baseService(repo);

service.create = async(data) => {
    const dataTransacction = {
        id_empleado: data.id_empleado,
        id_persona: data.id_persona,
        id_obra: data.id_obra
    }

    const transaccion = await repo.create(dataTransacction);

    if(data.tipo == "Compra"){
        const dataCompra = {
            fechaCredito: data.fechaCredito,
            id_transaccion: transaccion.id
        }

        const compra = await serviceCompra.create(dataCompra);

        await repo.update({id_compra:compra.id})
    }else if(data.tipo == "Venta"){
        const dataVenta = {
            porcentaje: data.porcentaje,
            id_transaccion: transaccion.id
        }

        const venta = await serviceVenta.create(dataCompra);

        await repo.update({id_venta:venta.id})
    }else{
        const dataDevolucion = {
            id_transaccion: transaccion.id,
            estado: 'ABIERTA'
        }

        const devolucion = await serviceDevolucion.create(dataCompra);

        await repo.update({id_devolucion:devolucion.id})
    }

}

export default service;