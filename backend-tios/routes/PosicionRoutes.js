import express from 'express';
import controller from '../controllers/PosicionController.js';
import { baseRouter } from './baseRouter.js';
import { validatePosicion } from '../validators/validatePosicion.js';

export default baseRouter(controller, validatePosicion);