import express from 'express';
import controller from '../controllers/ObraController.js';
import { baseRouter } from './baseRouter.js';
import { validateObra } from '../validators/create/validateObra.js'

export default baseRouter(controller, validateObra);