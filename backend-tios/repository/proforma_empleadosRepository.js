import { prisma } from '../config/db.js'

export const findAll = () => 
    prisma.proforma_empleados.findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });

export const findByID = (id_proforma, id_empleado) =>
    prisma.proforma_empleados.findFirst({
        where: {
            id_proforma,
            id_empleado,
            estadoEliminado: 'ACTIVO',
        },
    });

export const create = (data) => prisma.proforma_empleados.create({data});

export const update = async (id_proforma, id_empleado, data) => {
    const existente = await prisma.proforma_empleados.findFirst({
        where: { id_proforma, id_empleado, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;
    
    return prisma.proforma_empleados.update({
        where: {
            id_proforma_id_empleado: { id_proforma, id_empleado },
        },
        data,
    });
};

export const remove = async (id_proforma, id_empleado) => {
    const existente = await prisma.proforma_empleados.findFirst({
        where: { id_proforma, id_empleado, estadoEliminado: 'ACTIVO' }
    });
    if (!existente) return null;

    return prisma.proforma_empleados.update({
        where: {
            id_proforma_id_empleado: { id_proforma, id_empleado },
        },
        data: { estadoEliminado: 'ELIMINADO' },
    });
};
