import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js';

const repo = baseRepository('punto');

repo.findByCords = (data) =>
    prisma.punto.findFirst({
        where: {
            lat: data.lat,
            lng: data.lng,
            createdBy: data.createdBy,
        }
    });

export default repo;