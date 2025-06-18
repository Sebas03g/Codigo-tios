import { baseController } from './baseController.js';
import service from '../services/PuntoServices.js';

export const {
  create: crearPunto,
  update: updatePunto,
  remove: deletePunto,
  findById: findPunto,
  findAll: findAllPunto,
  extraData: extraDataPunto
} = baseController(service);
