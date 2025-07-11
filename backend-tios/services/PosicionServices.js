import repo from '../repository/PosicionRepository.js'
import { baseService } from './baseServices.js'

const service = baseService(repo);

service.create = async(data) => {
    const permiso = await repo.findByName(data.nombre);

    if(permiso){
        throw new Error("Error datos duplicados");
    }
    return await repo.create(data);
}

service.permisos = async(id) => {
   return await repo.obtenerPermisos(id);
}

export default service;