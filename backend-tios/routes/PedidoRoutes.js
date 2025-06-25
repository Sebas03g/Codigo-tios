import express from 'express';
import controller from '../controllers/PedidoController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);