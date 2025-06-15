import { baseController } from './baseController.js';
import service from '../services/VentaServices.js';

export const {
  create: crearVenta,
  update: updateVenta,
  remove: deleteVenta,
  findById: findVenta,
  findAll: findAllVenta
} = baseController(service);
