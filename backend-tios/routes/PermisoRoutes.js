import express from 'express';
import controller from '../controllers/PermisoController.js';
import { baseRouter } from './baseRouter.js';
import { validatePermiso } from '../validators/create/validatePermiso.js';

export default baseRouter(controller, validatePermiso);