import { baseRepository } from './baseRepository.js'

const repo = baseRepository('punto');

repo.findByCords = (lat, lng) =>
    prisma.punto.findFirst({
        where: {
            lat,
            lng,
            estadoEliminado: 'ACTIVO',
        }
    })

export default repo;