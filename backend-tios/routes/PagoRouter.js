import express from 'express';
import controller from '../controllers/PagoController.js';
import { baseRouter } from './baseRouter.js';
import { validatePago } from '../validators/validatePago.js'

export default baseRouter(controller, validatePago);