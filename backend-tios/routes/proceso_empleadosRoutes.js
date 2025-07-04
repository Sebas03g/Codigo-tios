import express from 'express';
import controller from '../controllers/proceso_empleadosController.js';
import { baseRouter } from './baseRouter.js';
import { validateproceso_empleados } from '../validators/validateproceso_empleados.js';

export default baseRouter(controller, validateproceso_empleados);