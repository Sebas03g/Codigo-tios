import express from 'express';
import controller from '../controllers/proceso_herramientasController.js';
import { baseRouter } from './baseRouter.js';
import { validateproceso_herramientas } from '../validators/create/validateproceso_herramientas.js';

export default baseRouter(controller,validateproceso_herramientas);