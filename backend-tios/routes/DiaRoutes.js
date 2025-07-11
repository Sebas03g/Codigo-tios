import express from 'express';
import controller from '../controllers/DiaController.js';
import { validateDia } from '../validators/create/validateDia.js'

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', validateDia ,controller.create);
router.put('/:id', controller.update);
router.post('/:id', controller.remove);

export default router;