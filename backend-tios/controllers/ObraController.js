import { baseController } from './baseController.js';
import service from '../services/ObraServices.js';

export const {
  create: crearObra,
  update: updateObra,
  remove: deleteObra,
  findById: findObra,
  findAll: findAllObra
} = baseController(service);
