import controller from '../controllers/CategoriaController.js';
import { baseRouter } from './baseRouter.js';
import { validarCategoria } from '../validators/create/validateCategoria.js'

export default baseRouter(controller, validarCategoria);