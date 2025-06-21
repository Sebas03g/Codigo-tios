import express from 'express';
import * as controller from '../controllers/EmpleadoController.js';
import { verificarToken } from '../middleware/authMiddleware.js';

export const router = express.Router();

router.get('/', verificarToken, controller.findAllEmpleado);
router.get('/:id', verificarToken, controller.findEmpleado);
router.post('/', verificarToken, controller.crearEmpleado);
router.put('/:id', verificarToken, controller.updateEmpleado);
router.post('/:id', verificarToken, controller.deleteEmpleado);
router.get('/:id/:relation', verificarToken,controller.extraDataEmpleado);
router.put('/password', verificarToken,controller.updatePassword);

router.post('/login', controller.loginEmpleado);
