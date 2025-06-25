import express from 'express';
import controller from '../controllers/DevolucionController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);