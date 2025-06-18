import express from 'express';
import * as controller from '../controllers/proforma_herramientasController.js';

export const router = express.Router();

router.get('/', controller.findAllproforma_herramientas);
router.get('/:id', controller.findproforma_herramientas);
router.post('/', controller.crearproforma_herramientas);
router.put('/:id', controller.updateproforma_herramientas);
router.delete('/:id', controller.deleteproforma_herramientas);
router.get('/:id/:relation', controller.extraDataproforma_herramientas);