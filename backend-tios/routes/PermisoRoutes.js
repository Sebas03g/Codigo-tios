import express from 'express';
import * as controller from '../controllers/PermisoController.js';

export const router = express.Router();

router.get('/', controller.findAllPermiso);
router.get('/:id', controller.findPermiso);
router.post('/', controller.crearPermiso);
router.put('/:id', controller.updatePermiso);
router.delete('/:id', controller.deletePermiso);
router.get('/:id/:relation', controller.extraDataPermiso);
