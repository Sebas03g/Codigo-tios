import { baseRepository } from './baseRepository.js'

export default baseRepository('punto');

export const findByCords = (lat, lng) =>
    prisma.punto.findFirst({
        where: {
            lat,
            lng,
            estadoEliminado: 'ACTIVO',
        }
    })