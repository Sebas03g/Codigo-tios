import { baseController } from './baseController.js';
import service from '../services/DiaServices.js';

export const {
  create: crearDia,
  update: updateDia,
  remove: deleteDia,
  findById: findDia,
  findAll: findAllDia
} = baseController(service);
