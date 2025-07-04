import express from 'express';
import controller from '../controllers/EmpleadoController.js';
import { verificarToken } from '../middleware/authMiddleware.js';
import * as validators from "../validators/validateEmpleado.js"

const router = express.Router();

router.post('/login', validators.validarPassword,controller.loginEmpleado);

router.get('/', verificarToken, controller.findAll);
router.get('/:id', verificarToken, controller.findById);
router.get('/related/:relation', verificarToken, controller.allExtraData);
router.post('/', verificarToken, validators.validarEmpleado, controller.create);
//router.post('/', controller.create);
router.put('/:id', verificarToken, controller.update);
router.post('/:id', verificarToken, controller.remove);
router.get('/:id/related/:relation', verificarToken,controller.extraData);
router.put('/password', verificarToken, validators.validarPassword,controller.updatePassword);
router.get("/getAllData", verificarToken, controller.getAllEmpleadoData);
router.post('/all/:id', verificarToken, controller.dataAllRelations);
router.post('/all/data', verificarToken, controller.allDataAllRelations);

export default router
