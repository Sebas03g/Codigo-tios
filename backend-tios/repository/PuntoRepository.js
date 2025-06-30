import { baseRepository } from './baseRepository.js'

const repo = baseRepository('punto');

repo.findByCords = (data) =>
    prisma.punto.findFirst({
        where: {
            lat: data.lat,
            lng: data.lng,
            estadoEliminado: 'ACTIVO',
        }
    })

export default repo;1