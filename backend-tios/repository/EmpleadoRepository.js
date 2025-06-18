import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js'

const repo = baseRepository('empleado');

repo.findByCedula = async (cedula) => {

    return await prisma.empleado.findFirst({
        where: { cedula: cedula, estadoEliminado: 'ACTIVO' },
    })

}

repo.updatePassword = async (cedula, password) => {
  const empleado = await prisma.empleado.findFirst({
    where: { cedula, estadoEliminado: 'ACTIVO' },
  });

  if (!empleado) return null;

  return await prisma.empleado.update({
    where: { cedula },
    data: { password },
  });
};

export default repo;