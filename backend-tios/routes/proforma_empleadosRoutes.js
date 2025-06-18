import express from 'express';
import * as controller from '../controllers/proforma_empleadosController.js';

export const router = express.Router();

router.get('/', controller.findAllproforma_empleados);
router.get('/:id', controller.findproforma_empleados);
router.post('/', controller.crearproforma_empleados);
router.put('/:id', controller.updateproforma_empleados);
router.delete('/:id', controller.deleteproforma_empleados);
router.get('/:id/:relation', controller.extraDataproforma_empleados);