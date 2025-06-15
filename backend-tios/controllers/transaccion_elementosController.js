import { baseController } from './baseController.js';
import service from '../services/transaccion_elementosServices.js';

export const {
  create: creartransaccion_elementos,
  update: updatetransaccion_elementos,
  remove: deletetransaccion_elementos,
  findById: findtransaccion_elementos,
  findAll: findAlltransaccion_elementos
} = baseController(service);
