import express from 'express';
import * as controller from '../controllers/obra_empleadosController.js';

export const router = express.Router();

router.get('/', controller.findAllobra_empleados);
router.get('/:id', controller.findobra_empleados);
router.post('/', controller.crearobra_empleados);
router.put('/:id', controller.updateobra_empleados);
router.delete('/:id', controller.deleteobra_empleados);
router.get('/:id/:relation', controller.extraDataobra_empleados);