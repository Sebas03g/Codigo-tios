import express from 'express';
import controller from '../controllers/InventarioController.js';
import { baseRouter } from './baseRouter.js';
import { validateInventario } from '../validators/validateInventario.js'

export default baseRouter(controller, validateInventario);