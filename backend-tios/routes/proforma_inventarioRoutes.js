import express from 'express';
import controller from '../controllers/proforma_inventarioController.js';
import { baseRouter } from './baseRouter.js';
import { validateproforma_inventario } from '../validators/validateproforma_inventario.js';

export default baseRouter(controller, validateproforma_inventario);