import repo from '../repository/PosicionRepository.js'
import { baseService } from './baseServices.js'

export default baseService(repo);

export const permisos = async(id) => {
   return await repo.obtenerPermisos(id);
}