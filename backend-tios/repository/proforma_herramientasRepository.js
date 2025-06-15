import { prisma } from '../config/db.js'

export const findAll = () => 
    prisma.proforma_herramientas.findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });

export const findByID = (id_proforma, id_herramienta) =>
    prisma.proforma_herramientas.findFirst({
        where: {
            id_proforma,
            id_herramienta,
            estadoEliminado: 'ACTIVO',
        },
    });

export const create = (data) => prisma.proforma_herramientas.create({data});

export const update = async (id_proforma, id_herramienta, data) => {
    const existente = await prisma.proforma_herramientas.findFirst({
        where: { id_proforma, id_herramienta, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;
    
    return prisma.proforma_herramientas.update({
        where: {
            id_proforma_id_herramienta: { id_proforma, id_herramienta },
        },
        data,
    });
};

export const remove = async (id_proforma, id_herramienta) => {
    const existente = await prisma.proforma_herramientas.findFirst({
        where: { id_proforma, id_herramienta, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;

    return prisma.proforma_herramientas.update({
        where: {
            id_proforma_id_herramienta: { id_proforma, id_herramienta },
        },
        data: { estadoEliminado: 'ELIMINADO' },
    });
};
