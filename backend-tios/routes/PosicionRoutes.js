import express from 'express';
import * as controller from '../controllers/PosicionController.js';

export const router = express.Router();

router.get('/', controller.findAllPosicion);
router.get('/:id', controller.findPosicion);
router.post('/', controller.crearPosicion);
router.put('/:id', controller.updatePosicion);
router.post('/:id', controller.deletePosicion);
router.get('/:id/:relation', controller.extraDataPosicion);