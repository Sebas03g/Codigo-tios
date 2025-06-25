import express from 'express';
import controller from '../controllers/UbicacionController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);