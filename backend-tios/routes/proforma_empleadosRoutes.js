import express from 'express';
import controller from '../controllers/proforma_empleadosController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);