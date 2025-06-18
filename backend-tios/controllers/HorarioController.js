import { baseController } from './baseController.js';
import service from '../services/HorarioServices.js';

export const {
  create: crearHorario,
  update: updateHorario,
  remove: deleteHorario,
  findById: findHorario,
  findAll: findAllHorario,
  extraData: extraDataHorario
} = baseController(service);
