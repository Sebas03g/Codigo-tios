import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('persona');

repo.findByCedRUC = async(dato) => {
    return prisma.persona.findFirst({
        where: {ruc: String(dato), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;