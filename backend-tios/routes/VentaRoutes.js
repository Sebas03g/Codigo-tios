import express from 'express';
import * as controller from '../controllers/VentaController.js';

export const router = express.Router();

router.get('/', controller.findAllVenta);
router.get('/:id', controller.findVenta);
router.post('/', controller.crearVenta);
router.put('/:id', controller.updateVenta);
router.post('/:id', controller.deleteVenta);
router.get('/:id/:relation', controller.extraDataVenta);