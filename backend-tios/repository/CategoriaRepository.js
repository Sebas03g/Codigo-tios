import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('categoria');

repo.findByCode = (data) => {
    prisma.categoria.findFirst({
        where: {
            codigo: data.codigo
        }
    });
}

export default repo;