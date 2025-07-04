import controller from '../controllers/ProcesoController.js';
import { baseRouter } from './baseRouter.js';
import { validateProceso } from '../validators/validateProceso.js';

export default baseRouter(controller, validateProceso);