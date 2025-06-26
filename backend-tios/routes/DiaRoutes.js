import express from 'express';
import controller from '../controllers/DiaController.js';

const router = express.Router();

router.get('/', controller.findAll);
router.get('/:id', controller.findById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id', controller.remove);

export default router;