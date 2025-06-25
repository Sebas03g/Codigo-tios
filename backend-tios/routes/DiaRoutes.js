import express from 'express';
import controller from '../controllers/DiaController.js';

const router = express.Router();

router.get('/', controller.findAllDia);
router.get('/:id', controller.findDia);
router.post('/', controller.crearDia);
router.put('/:id', controller.updateDia);
router.post('/:id', controller.deleteDia);

export default router;