import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('posicion');

repo.findByName = async(dato) => {
    return prisma.permiso.findFirst({
        where: {nombre: String(nombre), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;