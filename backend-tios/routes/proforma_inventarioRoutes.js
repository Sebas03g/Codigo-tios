import express from 'express';
import controller from '../controllers/proforma_inventarioController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);