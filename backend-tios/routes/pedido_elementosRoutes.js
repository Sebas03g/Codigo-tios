import express from 'express';
import controller from '../controllers/pedido_elementosController.js';
import { baseRouter } from './baseRouter.js';
import { validatepedido_elementos } from '../validators/validatepedido_elementos.js'

export default baseRouter(controller, validatepedido_elementos);