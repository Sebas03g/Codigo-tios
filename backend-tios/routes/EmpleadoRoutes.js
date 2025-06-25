import express from 'express';
import controller from '../controllers/EmpleadoController.js';
import { verificarToken } from '../middleware/authMiddleware.js';
import { baseRouter } from './baseRouter.js';

const router = express.Router();

router.get('/', verificarToken, controller.findAllEmpleado);
router.get('/:id', verificarToken, controller.findEmpleado);
router.post('/', verificarToken, controller.crearEmpleado);
router.put('/:id', verificarToken, controller.updateEmpleado);
router.post('/:id', verificarToken, controller.deleteEmpleado);
router.get('/:id/related/:relation', verificarToken,controller.extraDataEmpleado);
router.put('/password', verificarToken,controller.updatePassword);
router.get('/related/:relation', controller.allExtraDataEmpleado);

router.post('/login', controller.loginEmpleado);

export default router
