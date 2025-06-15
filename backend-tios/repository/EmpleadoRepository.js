import { baseRepository } from './baseRepository.js'
import { prisma } from '../config/db.js'

export default baseRepository('empleado');

export const findByCedula = async (cedula) => {

    return await prisma.empleado.findFirst({
        where: { cedula: cedula, estadoEliminado: 'ACTIVO' },
    })

}

export const updatePassword = async (cedula, password) => {
    return await prisma.empleado.update({
        where: { cedula: cedula, estadoEliminado: 'ACTIVO'  },
        data: {
            password: password,
        },
    });
}