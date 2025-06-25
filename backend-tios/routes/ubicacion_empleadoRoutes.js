import express from 'express';
import controller from '../controllers/ubicacion_empleadoController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);