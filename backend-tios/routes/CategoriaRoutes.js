import controller from '../controllers/CategoriaController.js';
import { baseRouter } from './baseRouter.js';
import { validarCategoria } from '../validators/validateCategoria.js'

console.log(controller);

export default baseRouter(controller, validarCategoria);