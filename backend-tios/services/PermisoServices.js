import repo from '../repository/PermisoRepository.js'
import { baseService } from './baseServices.js'

const service = baseService(repo);
service.create = async(data) => {
    const permiso = await repo.findByName(data.nombre);

    if(permiso){
        throw new Error("Error datos duplicados");
    }
    return await repo.create(permiso);
}


export default service;