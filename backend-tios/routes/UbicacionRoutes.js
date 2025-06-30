import express from 'express';
import controller from '../controllers/UbicacionController.js';
import { baseRouter } from './baseRouter.js';
import { validateUbicacion } from '../validators/validateUbicacion.js';

export default baseRouter(controller, validateUbicacion);