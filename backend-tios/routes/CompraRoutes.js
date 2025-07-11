import express from 'express';
import controller from '../controllers/CompraController.js';
import { baseRouter } from './baseRouter.js';
import { validateCompra } from '../validators/create/validateCompra.js'

export default baseRouter(controller, validateCompra);