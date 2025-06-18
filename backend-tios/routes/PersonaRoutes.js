import express from 'express';
import * as controller from '../controllers/PersonaController.js';

export const router = express.Router();

router.get('/', controller.findAllPersona);
router.get('/:id', controller.findPersona);
router.post('/', controller.crearPersona);
router.put('/:id', controller.updatePersona);
router.delete('/:id', controller.deletePersona);
router.get('/:id/:relation', controller.extraDataPersona);