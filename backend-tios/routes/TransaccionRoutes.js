import express from 'express';
import controller from '../controllers/TransaccionController.js';
import { baseRouter } from './baseRouter.js';
import { validateTransaccion } from '../validators/create/validateTransaccion.js';

export default baseRouter(controller, validateTransaccion);