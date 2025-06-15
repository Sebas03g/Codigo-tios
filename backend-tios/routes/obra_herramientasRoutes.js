import express from 'express';
import * as controller from '../controllers/obra_herramientasController.js';

export const router = express.Router();

router.get('/', controller.findAllobra_herramientas);
router.get('/:id', controller.findobra_herramientas);
router.post('/', controller.crearobra_herramientas);
router.put('/:id', controller.updateobra_herramientas);
router.delete('/:id', controller.deleteobra_herramientas);