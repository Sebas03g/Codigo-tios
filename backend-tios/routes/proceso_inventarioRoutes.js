import express from 'express';
import controller from '../controllers/proceso_inventarioController.js';
import { baseRouter } from './baseRouter.js';
import { validateproceso_inventario } from '../validators/validateproceso_inventario.js';

export default baseRouter(controller, validateproceso_inventario);