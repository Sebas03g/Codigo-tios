import repo from '../repository/CategoriaRepository.js'
import { baseService } from './baseServices.js'
import { CreateCode } from '../utils/CreateCode.js';

const service = baseService(repo);

service.create = async (data) => {
    data.codigo = CreateCode(data.tipo);
    return await repo.create(data);
}

export default service;
