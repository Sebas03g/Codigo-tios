import express from 'express';
import controller from '../controllers/CompraController.js';
import { baseRouter } from './baseRouter.js';
import { validateCompra } from '../validators/validateCompra.js'

export default baseRouter(controller, validateCompra);