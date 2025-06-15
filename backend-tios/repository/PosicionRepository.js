import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js'


export default baseRepository('posicion');

export const obtenerPermisos = async (id) => {
    const posicion = await prisma.posicion.findFirst({
        where: {id: id, estadoEliminado: 'ACTIVO'},
        select: {permisos: true}
    });
    return posicion?.permisos || [];

}