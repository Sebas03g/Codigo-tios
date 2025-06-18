import express from 'express';
import * as controller from '../controllers/pedido_elementosController.js';

export const router = express.Router();

router.get('/', controller.findAllpedido_elementos);
router.get('/:id', controller.findpedido_elementos);
router.post('/', controller.crearpedido_elementos);
router.put('/:id', controller.updatepedido_elementos);
router.delete('/:id', controller.deletepedido_elementos);
router.get('/:id/:relation', controller.extraDatapedido_elementos);