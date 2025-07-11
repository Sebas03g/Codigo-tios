import express from 'express';
import controller from '../controllers/DevolucionController.js';
import { baseRouter } from './baseRouter.js';
import { validateDevolucion } from '../validators/create/validateDevolucion.js'

export default baseRouter(controller, validateDevolucion);