import express from 'express';
import controller from '../controllers/pedido_elementosController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);