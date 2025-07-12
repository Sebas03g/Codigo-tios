import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('categoria');

repo.findByCode = (dato) => {
    prisma.categoria.findFirst({
        where: {
            codigo: dato
        }
    });
}

export default repo;