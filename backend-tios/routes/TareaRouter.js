import express from 'express';
import controller from '../controllers/TareaController.js';
import { baseRouter } from './baseRouter.js';
import { validateTarea } from '../validators/create/validateTarea.js';

export default baseRouter(controller, validateTarea);