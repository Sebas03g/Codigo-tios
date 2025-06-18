import express from 'express';
import * as controller from '../controllers/InventarioController.js';

export const router = express.Router();

router.get('/', controller.findAllInventario);
router.get('/:id', controller.findInventario);
router.post('/', controller.crearInventario);
router.put('/:id', controller.updateInventario);
router.delete('/:id', controller.deleteInventario);
router.get('/:id/:relation', controller.extraDataInventario);