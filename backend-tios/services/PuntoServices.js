import repo from '../repository/PuntoRepository.js'
import { baseService } from './baseServices.js'

const service = baseService(repo);

service.create = async (data) => {
    const punto = await repo.findByCords(data);
    if(punto === null){
       return await repo.create(data);
    }

    return punto;
}

export default service;