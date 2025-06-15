import express from 'express';
import * as controller from '../controllers/UbicacionController.js';

export const router = express.Router();

router.get('/', controller.findAllUbicacion);
router.get('/:id', controller.findUbicacion);
router.post('/', controller.crearUbicacion);
router.put('/:id', controller.updateUbicacion);
router.delete('/:id', controller.deleteUbicacion);