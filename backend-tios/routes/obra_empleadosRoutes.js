import express from 'express';
import controller from '../controllers/obra_empleadosController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);