import { baseController } from './baseController.js';
import service from '../services/TransaccionServices.js';

export const {
  create: crearTransaccion,
  update: updateTransaccion,
  remove: deleteTransaccion,
  findById: findTransaccion,
  findAll: findAllTransaccion,
  extraData: extraDataTransaccion
} = baseController(service);
