import express from 'express';
import controller from '../controllers/HorarioController.js';
import { baseRouter } from './baseRouter.js';
import { validateHorario } from '../validators/validateHorario.js'

export default baseRouter(controller,validateHorario);