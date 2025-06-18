import express from 'express';
import * as controller from '../controllers/transaccion_elementosController.js';

export const router = express.Router();

router.get('/', controller.findAlltransaccion_elementos);
router.get('/:id', controller.findtransaccion_elementos);
router.post('/', controller.creartransaccion_elementos);
router.put('/:id', controller.updatetransaccion_elementos);
router.delete('/:id', controller.deletetransaccion_elementos);
router.get('/:id/:relation', controller.extraDatatransaccion_elementos);