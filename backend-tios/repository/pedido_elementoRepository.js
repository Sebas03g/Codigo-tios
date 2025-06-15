import { prisma } from '../config/db.js'

export const findAll = () => 
    prisma.pedido_elementos.findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });

export const findByID = (id_pedido, id_elemento) =>
    prisma.pedido_elementos.findFirst({
        where: {
            id_pedido,
            id_elemento,
            estadoEliminado: 'ACTIVO',
        },
    });

export const create = (data) => prisma.pedido_elementos.create({data});

export const update = async (id_pedido, id_elemento, data) => {
    const existente = await prisma.pedido_elementos.findFirst({
        where: { id_pedido, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;
    
    return prisma.pedido_elementos.update({
        where: {
            id_pedido_id_elemento: { id_pedido, id_elemento },
        },
        data,
    });
};

export const remove = async (id_pedido, id_elemento) => {
    const existente = await prisma.pedido_elementos.findFirst({
        where: { id_pedido, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;

    return prisma.pedido_elementos.update({
        where: {
            id_pedido_id_elemento: { id_pedido, id_elemento },
        },
        data: { estadoEliminado: 'ELIMINADO' },
    });
};
