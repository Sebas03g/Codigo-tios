import express from 'express';
import * as controller from '../controllers/proforma_inventarioController.js';

export const router = express.Router();

router.get('/', controller.findAllproforma_inventario);
router.get('/:id', controller.findproforma_inventario);
router.post('/', controller.crearproforma_inventario);
router.put('/:id', controller.updateproforma_inventario);
router.delete('/:id', controller.deleteproforma_inventario);
router.get('/:id/:relation', controller.extraDataproforma_inventario);