import express from 'express';
import controller from '../controllers/PersonaController.js';
import { baseRouter } from './baseRouter.js';
import { validatePersona } from '../validators/create/validatePersona.js';

export default baseRouter(controller, validatePersona);