import express from 'express';
import * as controller from '../controllers/VentaController.js';

export const router = express.Router();

router.get('/', controller.findAllVenta);
router.get('/:id', controller.findVenta);
router.post('/', controller.crearVenta);
router.put('/:id', controller.updateVenta);
router.delete('/:id', controller.deleteVenta);