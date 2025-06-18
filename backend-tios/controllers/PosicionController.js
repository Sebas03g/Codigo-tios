import { baseController } from './baseController.js';
import service, {permisos} from '../services/PosicionServices.js';

export const {
  create: crearPosicion,
  update: updatePosicion,
  remove: deletePosicion,
  findById: findPosicion,
  findAll: findAllPosicion,
  extraData: extraDataPosicion
} = baseController(service);