import { baseController } from './baseController.js';
import service, {permisos} from '../services/PosicionServices.js';

export default baseController(service);