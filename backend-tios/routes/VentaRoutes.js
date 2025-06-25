import express from 'express';
import controller from '../controllers/VentaController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);