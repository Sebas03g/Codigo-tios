import express from 'express';
import controller from '../controllers/obra_herramientasController.js';
import { baseRouter } from './baseRouter.js';
import { validateobra_herramientas } from '../validators/validateobra_herramientas.js'

export default baseRouter(controller, validateobra_herramientas);