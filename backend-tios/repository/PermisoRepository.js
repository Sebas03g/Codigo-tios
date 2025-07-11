import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('permiso');

repo.findByName = async(dato) => {
    return prisma.permiso.findFirst({
        where: {nombre: String(dato.nombre), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;