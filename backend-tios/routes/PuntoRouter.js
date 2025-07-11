import express from 'express';
import controller from '../controllers/PuntoController.js';
import { baseRouter } from './baseRouter.js';
import { validatePunto } from '../validators/create/validatePunto.js';

export default baseRouter(controller, validatePunto);