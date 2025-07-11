import express from 'express';
import controller from '../controllers/VentaController.js';
import { baseRouter } from './baseRouter.js';
import { validateVenta } from '../validators/create/validateVenta.js';

export default baseRouter(controller,validateVenta);