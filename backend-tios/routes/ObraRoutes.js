import express from 'express';
import controller from '../controllers/ObraController.js';
import { baseRouter } from './baseRouter.js';
import { validateObra } from '../validators/validateObra.js'

export default baseRouter(controller, validateObra);