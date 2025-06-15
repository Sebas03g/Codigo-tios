import express from 'express';
import * as controller from '../controllers/PosicionController.js';

export const router = express.Router();

router.get('/', controller.findAllPosicion);
router.get('/:id', controller.findPosicion);
router.get('/permisos/:id', controller.obtenerPermisos);
router.post('/', controller.crearPosicion);
router.put('/:id', controller.updatePosicion);
router.delete('/:id', controller.deletePosicion);