import express from 'express';
import * as controller from '../controllers/HorarioController.js';

export const router = express.Router();

router.get('/', controller.findAllHorario);
router.get('/:id', controller.findHorario);
router.post('/', controller.crearHorario);
router.put('/:id', controller.updateHorario);
router.post('/:id', controller.deleteHorario);
router.get('/:id/:relation', controller.extraDataHorario);