import repo from '../repository/PersonaRepository.js'
import { baseService } from './baseServices.js'

const service = baseService(repo);

service.create = async(data) => {
    let persona = await repo.findByCedRUC(data.ruc);
    if(persona != null && persona.proveedor == data.proveedor){
        throw new Error("Error datos duplicados");
    }else if(persona != null && data.proveedor){
        return await repo.update({proveedor: true})
    }
    persona = await repo.findByMail(data.mail);
    if(persona != null){
        throw new Error("Error datos duplicados");
    }

    return await repo.create(data);
}

export default service;