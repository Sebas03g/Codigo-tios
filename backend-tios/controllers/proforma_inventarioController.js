import { baseController } from './baseController.js';
import service from '../services/proforma_inventarioServices.js';

export const {
  create: crearproforma_inventario,
  update: updateproforma_inventario,
  remove: deleteproforma_inventario,
  findById: findproforma_inventario,
  findAll: findAllproforma_inventario
} = baseController(service);
