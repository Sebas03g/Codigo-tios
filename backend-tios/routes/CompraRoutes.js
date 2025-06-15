import express from 'express';
import * as controller from '../controllers/CompraController.js';

export const router = express.Router();

router.get('/', controller.findAllCompra);
router.get('/:id', controller.findCompra);
router.post('/', controller.crearCompra);
router.put('/:id', controller.updateCompra);
router.delete('/:id', controller.deleteCompra);