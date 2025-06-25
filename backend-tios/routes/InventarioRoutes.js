import express from 'express';
import controller from '../controllers/InventarioController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);