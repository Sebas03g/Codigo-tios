import { baseController } from './baseController.js';
import service from '../services/PedidoServices.js';

export const {
  create: crearPedido,
  update: updatePedido,
  remove: deletePedido,
  findById: findPedido,
  findAll: findAllPedido
} = baseController(service);
