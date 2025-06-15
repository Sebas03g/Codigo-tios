import { baseController } from './baseController.js';
import service from '../services/obra_empleadosServices.js';

export const {
  create: crearobra_empleados,
  update: updateobra_empleados,
  remove: deleteobra_empleados,
  findById: findobra_empleados,
  findAll: findAllobra_empleados
} = baseController(service);
