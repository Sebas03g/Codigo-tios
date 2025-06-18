import { baseController } from './baseController.js';
import service from '../services/obra_herramientasServices.js';

export const {
  create: crearobra_herramientas,
  update: updateobra_herramientas,
  remove: deleteobra_herramientas,
  findById: findobra_herramientas,
  findAll: findAllobra_herramientas,
  extraData: extraDataobra_herramientas
} = baseController(service);
