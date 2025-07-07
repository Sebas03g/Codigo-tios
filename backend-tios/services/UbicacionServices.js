import location from '../repository/UbicacionRepository.js'
import point from '../services/PuntoServices.js'
import { baseService } from './baseServices.js'

const service = baseService(location);

service.create = async (data) => {

    const data_point = {
            lat:data.lat,
            lng:data.lng,
            createdBy: data.createdBy
    };
    let punto = await point.create(data_point);

    data.id_punto = punto.id;
    delete data.lat
    delete data.lng

    return await location.create(data);

}
service.update = async(id, data) => {
    let punto  = await point.findByCords(data.lat, data.lng);
    if(!punto){
        const data_point = {
            lat:data.lat,
            lng:data.lng
        };
        punto = await point.create(data_point);
    }

    data.id_punto = punto.id;
    delete data.lat
    delete data.lng

    return await location.update(id, data);
}

export default service;