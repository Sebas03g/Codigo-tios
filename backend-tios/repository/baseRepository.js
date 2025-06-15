import { prisma } from '../config/db.js'

export const baseRepository = (modelName) => ({
  findAll: () =>{
    return prisma[modelName].findMany({
      where: { estadoEliminado: 'ACTIVO' },
    })},

  findById: (id) =>{
    return prisma[modelName].findFirst({
      where: { id: Number(id), estadoEliminado: 'ACTIVO' },
    })},

  create: (data) => {return prisma[modelName].create({ data })},

  update: (id, data) =>{
    return prisma[modelName].update({
      where: { id: Number(id), estadoEliminado: 'ACTIVO'  },
      data,
    })},

  remove: (id) =>{
    return prisma[modelName].update({
      where: { id: Number(id) },
      data: { estadoEliminado: 'ELIMINADO' },
    })},
})
