import express from 'express';
import * as controller from '../controllers/ubicacion_empleadoController.js';

export const router = express.Router();

router.get('/', controller.findAllubicacion_empleado);
router.get('/:id', controller.findubicacion_empleado);
router.post('/', controller.crearubicacion_empleado);
router.put('/:id', controller.updateubicacion_empleado);
router.post('/:id', controller.deleteubicacion_empleado);
router.get('/:id/:relation', controller.extraDataubicacion_empleado);