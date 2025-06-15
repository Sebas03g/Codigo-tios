import { baseController } from './baseController.js';
import service from '../services/proforma_herramientasServices.js';

export const {
  create: crearproforma_herramientas,
  update: updateproforma_herramientas,
  remove: deleteproforma_herramientas,
  findById: findproforma_herramientas,
  findAll: findAllproforma_herramientas
} = baseController(service);
