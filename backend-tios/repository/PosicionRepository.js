import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('posicion');

repo.findByName = async(dato) => {
    return prisma.permiso.findFirst({
        where: {nombre: String(dato), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;