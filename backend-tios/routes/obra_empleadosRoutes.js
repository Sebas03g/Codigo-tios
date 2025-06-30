import express from 'express';
import controller from '../controllers/obra_empleadosController.js';
import { baseRouter } from './baseRouter.js';
import { validateobra_empleados } from '../validators/validateobra_empleados.js'

export default baseRouter(controller, validateobra_empleados);