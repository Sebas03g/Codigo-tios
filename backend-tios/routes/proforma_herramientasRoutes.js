import express from 'express';
import controller from '../controllers/proforma_herramientasController.js';
import { baseRouter } from './baseRouter.js';
import { validateproforma_herramientas } from '../validators/validateproforma_herramientas.js';

export default baseRouter(controller,validateproforma_herramientas);