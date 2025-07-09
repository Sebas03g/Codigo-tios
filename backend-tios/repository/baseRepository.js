import { prisma } from '../config/db.js';

export const baseRepository = (modelName) => ({
  findAll: async () => {
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ACTIVO' },
    });
  },

  findById: async (id) => {
    return prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
    });
  },

  create: async (data) => {
    return prisma[modelName].create({ data });
  },
  
  findAllFilter: async (filter) => {
    return prisma[modelName].findMany({
      where: filter,
    });
  },

  findAllDeleted: async () => {
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ELIMINADO' },
    })
  },

  update: async (id, data) => {
    const record = await prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
    });
    if (!record) return null;
    return prisma[modelName].update({
      where: { id: Number(id) },
      data,
    });
  },

  delete: async (id, data) => {
    const record = await prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
    });
    if (!record) return null;
    return prisma[modelName].update({
      where: { id: Number(id) },
      data: data,
    });
  },

  extraData: async (id, relation) => {
    return prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
      select: {
        [relation]: true,
      },
    });
  },

  allExtraData: async (relation) => {
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ACTIVO' },
      select: {
        [relation]: true,
      },
    });
  },
  dataAllRelations: async (id, includes) => {
    console.log(includes);
    return prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
      include: includes
    });
  },
  allDataAllRelations: async (includes) => {
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ACTIVO' },
      include: includes
    });
  }
});
