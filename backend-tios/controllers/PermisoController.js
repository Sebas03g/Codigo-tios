import { baseController } from './baseController.js';
import service from '../services/PermisoServices.js';

export const {
  create: crearPermiso,
  update: updatePermiso,
  remove: deletePermiso,
  findById: findPermiso,
  findAll: findAllPermiso
} = baseController(service);
