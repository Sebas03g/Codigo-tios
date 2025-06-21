import express from 'express';
import * as controller from '../controllers/ObraController.js';

export const router = express.Router();

router.get('/', controller.findAllObra);
router.get('/:id', controller.findObra);
router.post('/', controller.crearObra);
router.put('/:id', controller.updateObra);
router.post('/:id', controller.deleteObra);
router.get('/:id/:relation', controller.extraDataObra);