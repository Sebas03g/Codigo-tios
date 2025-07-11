import express from 'express';
import controller from '../controllers/PedidoController.js';
import { baseRouter } from './baseRouter.js';
import { validatePedido } from '../validators/create/validatePedido.js'

export default baseRouter(controller, validatePedido);