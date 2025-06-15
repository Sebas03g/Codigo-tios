import express from 'express';
import * as controller from '../controllers/ProformaController.js';

export const router = express.Router();

router.get('/', controller.findAllProforma);
router.get('/:id', controller.findProforma);
router.post('/', controller.crearProforma);
router.put('/:id', controller.updateProforma);
router.delete('/:id', controller.deleteProforma);