import express from 'express';
import * as controller from '../controllers/TransaccionController.js';

export const router = express.Router();

router.get('/', controller.findAllTransaccion);
router.get('/:id', controller.findTransaccion);
router.post('/', controller.crearTransaccion);
router.put('/:id', controller.updateTransaccion);
router.delete('/:id', controller.deleteTransaccion);