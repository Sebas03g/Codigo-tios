import express from 'express';
import controller from '../controllers/transaccion_elementosController.js';
import { baseRouter } from './baseRouter.js';
import { validatetransaccion_elementos } from '../validators/create/validatetransaccion_elementos.js';

export default baseRouter(controller, validatetransaccion_elementos);