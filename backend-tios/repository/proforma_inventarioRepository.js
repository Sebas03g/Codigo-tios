import { prisma } from '../config/db.js'

export const findAll = () => 
    prisma.proforma_inventario.findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });

export const findByID = (id_proforma, id_elemento) =>
    prisma.proforma_inventario.findFirst({
        where: {
            id_proforma,
            id_elemento,
            estadoEliminado: 'ACTIVO',
        },
    });

export const create = (data) => prisma.proforma_inventario.create({data});

export const update = async (id_proforma, id_elemento, data) => {
    const existente = await prisma.proforma_inventario.findFirst({
        where: { id_proforma, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;
    
    return prisma.proforma_inventario.update({
        where: {
            id_proforma_id_elemento: { id_proforma, id_elemento },
        },
        data,
    });
};

export const remove = async (id_proforma, id_elemento) => {
    const existente = await prisma.proforma_inventario.findFirst({
        where: { id_proforma, id_elemento, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;

    return prisma.proforma_inventario.update({
        where: {
            id_proforma_id_elemento: { id_proforma, id_elemento },
        },
        data: { estadoEliminado: 'ELIMINADO' },
    });
};
