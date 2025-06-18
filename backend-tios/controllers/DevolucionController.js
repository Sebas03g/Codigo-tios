import { baseController } from './baseController.js';
import service from '../services/DevolucionServices.js';

export const {
  create: crearDevolucion,
  update: updateDevolucion,
  remove: deleteDevolucion,
  findById: findDevolucion,
  findAll: findAllDevolucion,
  extraData: extraDataDevolucion
} = baseController(service);
