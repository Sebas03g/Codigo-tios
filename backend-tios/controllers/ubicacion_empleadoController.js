import { baseController } from './baseController.js';
import service from '../services/ubicacion_empleadosServices.js';

export const {
  create: crearubicacion_empleado,
  update: updateubicacion_empleado,
  remove: deleteubicacion_empleado,
  findById: findubicacion_empleado,
  findAll: findAllubicacion_empleado,
  extraData: extraDataubicacion_empleado
} = baseController(service);
