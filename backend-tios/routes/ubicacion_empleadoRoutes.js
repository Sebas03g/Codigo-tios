import express from 'express';
import controller from '../controllers/ubicacion_empleadoController.js';
import { baseRouter } from './baseRouter.js';
import { validateubicacion_empleados } from '../validators/validateubicacion_empleados.js';

export default baseRouter(controller, validateubicacion_empleados);