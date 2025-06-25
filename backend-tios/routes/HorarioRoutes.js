import express from 'express';
import controller from '../controllers/HorarioController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);