import express from 'express';
import controller from '../controllers/TransaccionController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);