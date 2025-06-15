import { prisma } from '../config/db.js'

export const findAll = () => 
    prisma.transaccion_elementos.findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });

export const findByID = (id_transaccion, id_elemento) =>
    prisma.transaccion_elementos.findFirst({
        where: {
            id_transaccion,
            id_elemento,
            estadoEliminado: 'ACTIVO',
        },
    });

export const create = (data) => prisma.transaccion_elementos.create({data});

export const update = async (id_transaccion, id_elemento, data) => {
    const existente = await prisma.transaccion_elementos.findFirst({
        where: { id_transaccion, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;
    
    return prisma.transaccion_elementos.update({
        where: {
            id_transaccion_id_elemento: { id_transaccion, id_elemento },
        },
        data,
    });
};

export const remove = async (id_transaccion, id_elemento) => {
    const existente = await prisma.transaccion_elementos.findFirst({
        where: { id_transaccion, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;

    return prisma.transaccion_elementos.update({
        where: {
            id_transaccion_id_elemento: { id_transaccion, id_elemento },
        },
        data: { estadoEliminado: 'ELIMINADO' },
    });
};
