import express from 'express';
import * as controller from '../controllers/MensajeController.js';

export const router = express.Router();

router.get('/', controller.findAllMensaje);
router.get('/:id', controller.findMensaje);
router.post('/', controller.crearMensaje);
router.put('/:id', controller.updateMensaje);
router.delete('/:id', controller.deleteMensaje);