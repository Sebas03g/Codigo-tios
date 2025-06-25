import express from 'express';
import controller from '../controllers/PersonaController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);