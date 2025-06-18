import { baseController } from './baseController.js';
import service from '../services/ProformaServices.js';

export const {
  create: crearProforma,
  update: updateProforma,
  remove: deleteProforma,
  findById: findProforma,
  findAll: findAllProforma,
  extraData: extraDataProforma
} = baseController(service);
