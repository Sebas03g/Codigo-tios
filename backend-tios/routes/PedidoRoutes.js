import express from 'express';
import * as controller from '../controllers/PedidoController.js';

export const router = express.Router();

router.get('/', controller.findAllPedido);
router.get('/:id', controller.findPedido);
router.post('/', controller.crearPedido);
router.put('/:id', controller.updatePedido);
router.post('/:id', controller.deletePedido);
router.get('/:id/:relation', controller.extraDataPedido);