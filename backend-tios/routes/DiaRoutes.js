import express from 'express';
import * as controller from '../controllers/DiaController.js';

export const router = express.Router();

router.get('/', controller.findAllDia);
router.get('/:id', controller.findDia);
router.post('/', controller.crearDia);
router.put('/:id', controller.updateDia);
router.delete('/:id', controller.deleteDia);