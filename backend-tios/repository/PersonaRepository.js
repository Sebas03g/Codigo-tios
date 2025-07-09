import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('persona');

repo.findByCedRUC = async(dato) => {
    return prisma.persona.findFirst({
        where: {ruc: String(dato), estadoEliminado: 'ACTIVO' },
    });
}

repo.findByMail = async(dato) => {
    return prisma.persona.findFirst({
        where: {mail: String(mail), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;