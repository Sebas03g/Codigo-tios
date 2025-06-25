import express from 'express';
import controller from '../controllers/obra_herramientasController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);