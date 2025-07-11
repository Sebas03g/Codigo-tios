import controller from '../controllers/PermisoDependenciaController.js';
import { baseRouter } from './baseRouter.js';
import { validatePermisoDependencia } from '../validators/create/validatePermisoDependencia.js';

export default baseRouter(controller, validatePermisoDependencia);