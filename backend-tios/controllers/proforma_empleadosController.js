import { baseController } from './baseController.js';
import service from '../services/proforma_empleadosServices.js';

export const {
  create: crearproforma_empleados,
  update: updateproforma_empleados,
  remove: deleteproforma_empleados,
  findById: findproforma_empleados,
  findAll: findAllproforma_empleados
} = baseController(service);
