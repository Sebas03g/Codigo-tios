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

  remove: async (id) => {
    const record = await prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
    });
    if (!record) return null;
    return prisma[modelName].update({
      where: { id: Number(id) },
      data: { estadoEliminado: 'ELIMINADO' },
    });
  },

  extraData: async (id, relation) => {
    return prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
      include: {
        [relation]: true,
      },
    });
  },

  allExtraData: async (relation) => {
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ACTIVO' },
      include: {
        [relation]: true,
      },
    });
  },
  dataAllRelations: async (id, includes) => {
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
