import express from 'express';
import controller from '../controllers/PosicionController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);