import express from 'express';
import controller from '../controllers/MensajeController.js';
import { baseRouter } from './baseRouter.js';
import { validateMensaje } from '../validators/validateMensaje.js'

export default baseRouter(controller, validateMensaje);