import { baseController } from './baseController.js';
import service from '../services/InventarioServices.js';

export const {
  create: crearInventario,
  update: updateInventario,
  remove: deleteInventario,
  findById: findInventario,
  findAll: findAllInventario
} = baseController(service);
