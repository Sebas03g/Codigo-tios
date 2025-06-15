import { baseController } from './baseController.js';
import service from '../services/UbicacionServices.js';

export const {
  create: crearUbicacion,
  update: updateUbicacion,
  remove: deleteUbicacion,
  findById: findUbicacion,
  findAll: findAllUbicacion
} = baseController(service);
