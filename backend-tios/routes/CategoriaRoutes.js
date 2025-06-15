import express from 'express';
import * as controller from '../controllers/CategoriaController.js';

const router = express.Router();

router.get('/', controller.findAllCategoria);
router.get('/:id', controller.findCategoria);
router.post('/', controller.crearCategoria);
router.put('/:id', controller.updateCategoria);
router.delete('/:id', controller.deleteCategoria);

export {router}