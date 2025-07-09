import repo from '../repository/CategoriaRepository.js'
import { baseService } from './baseServices.js'

const service = baseService(repo);

service.create = async (data) => {
    const category = await repo.findByCode(data);

    if(category) throw new Error("Error codigo duplicado.");
    return await repo.create(data);
}

export default service;
