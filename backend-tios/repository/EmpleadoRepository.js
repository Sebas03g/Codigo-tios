import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js'

const repo = baseRepository('empleado');

repo.getAllData = async () => {
  return prisma.empleado.findMany();
},

repo.findByCedula = async (cedula) => {

    return await prisma.empleado.findFirst({
        where: { cedula: cedula, estadoEliminado: 'ACTIVO' },
    })

}

repo.updatePassword = async (id, password) => {
  const empleado = await prisma.empleado.findFirst({
    where: { id: id, estadoEliminado: 'ACTIVO' },
  });

  if (!empleado) return null;

  return await prisma.empleado.update({
    where: { id: empleado.id },
    data: { password },
  });
};

repo.getPermisos = async (id) => {
  const empleado = await repo.findById(id)

  const permisos = await prisma.posicion.findFirst({
      where: { id: Number(empleado.id_posicion), estadoEliminado: 'ACTIVO' },
      select: {permisos : true}
  });

  return permisos;
}

repo.updateLiveLocationn = async (id, data) => {
  const empleado = await repo.findById(id)
}

repo.findByCedRUC = async(dato) => {
    return prisma.persona.findFirst({
        where: {ruc: String(dato), estadoEliminado: 'ACTIVO' },
    });
}

repo.findByMail = async(dato) => {
    return prisma.persona.findFirst({
        where: {mail: String(dato), estadoEliminado: 'ACTIVO' },
    });
}

export default repo;