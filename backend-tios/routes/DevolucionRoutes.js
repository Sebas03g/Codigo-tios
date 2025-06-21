import express from 'express';
import * as controller from '../controllers/DevolucionController.js';

export const router = express.Router();

router.get('/', controller.findAllDevolucion);
router.get('/:id', controller.findDevolucion);
router.post('/', controller.crearDevolucion);
router.put('/:id', controller.updateDevolucion);
router.post('/:id', controller.deleteDevolucion);
router.get('/:id/:relation', controller.extraDataDevolucion);