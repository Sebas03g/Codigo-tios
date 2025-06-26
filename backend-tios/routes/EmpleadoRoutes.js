import express from 'express';
import controller from '../controllers/EmpleadoController.js';
import { verificarToken } from '../middleware/authMiddleware.js';
import { baseRouter } from './baseRouter.js';

const router = express.Router();

router.get('/', verificarToken, controller.findAll);
router.get('/:id', verificarToken, controller.findById);
router.post('/', verificarToken, controller.create);
router.put('/:id', verificarToken, controller.update);
router.post('/:id', verificarToken, controller.remove);
router.get('/:id/related/:relation', verificarToken,controller.extraData);
router.put('/password', verificarToken,controller.updatePassword);
router.get('/related/:relation', controller.allExtraData);

router.post('/login', controller.loginEmpleado);

export default router
