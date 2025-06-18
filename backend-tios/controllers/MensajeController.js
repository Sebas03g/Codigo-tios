import { baseController } from './baseController.js';
import service from '../services/MensajeServices.js';

export const {
  create: crearMensaje,
  update: updateMensaje,
  remove: deleteMensaje,
  findById: findMensaje,
  findAll: findAllMensaje,
  extraData: extraDataMensaje
} = baseController(service);
