import { baseController } from './baseController.js';
import service from '../services/pedido_elementosServices.js';

export const {
  create: crearpedido_elementos,
  update: updatepedido_elementos,
  remove: deletepedido_elementos,
  findById: findpedido_elementos,
  findAll: findAllpedido_elementos
} = baseController(service);
