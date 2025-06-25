import express from 'express';
import controller from '../controllers/PermisoController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);