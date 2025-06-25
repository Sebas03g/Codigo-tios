import express from 'express';
import controller from '../controllers/transaccion_elementosController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);