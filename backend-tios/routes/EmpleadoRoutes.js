import express from 'express';
import controller from '../controllers/EmpleadoController.js';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/login', controller.loginEmpleado);
router.get('/related/:relation', controller.allExtraData);

router.get('/', verificarToken, controller.findAll);
router.get('/:id', verificarToken, controller.findById);
router.post('/', verificarToken, controller.create);
//router.post('/', controller.create);
router.put('/:id', verificarToken, controller.update);
router.post('/:id', verificarToken, controller.remove);
router.get('/:id/related/:relation', verificarToken,controller.extraData);
router.put('/password', verificarToken,controller.updatePassword);

export default router
