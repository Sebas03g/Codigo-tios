import express from 'express';
import controller from '../controllers/proforma_empleadosController.js';
import { baseRouter } from './baseRouter.js';
import { validateproforma_empleados } from '../validators/validateproforma_empleados.js';

export default baseRouter(controller, validateproforma_empleados);