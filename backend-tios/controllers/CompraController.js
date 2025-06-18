import { baseController } from './baseController.js';
import service from '../services/CompraServices.js';

export const {
  create: crearCompra,
  update: updateCompra,
  remove: deleteCompra,
  findById: findCompra,
  findAll: findAllCompra,
  extraData: extraDataCompra
} = baseController(service);
