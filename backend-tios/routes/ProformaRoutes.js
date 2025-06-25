import express from 'express';
import controller from '../controllers/ProformaController.js';
import { baseRouter } from './baseRouter.js';

export default baseRouter(controller);