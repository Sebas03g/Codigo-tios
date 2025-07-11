import express from 'express';
import controller from '../controllers/ProformaController.js';
import { baseRouter } from './baseRouter.js';
import { validateProforma } from '../validators/create/validateProforma.js';

export default baseRouter(controller, validateProforma);