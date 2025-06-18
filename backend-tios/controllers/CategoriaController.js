import { baseController } from './baseController.js';
import service from '../services/CategoriaServices.js';

export const {
  create: crearCategoria,
  update: updateCategoria,
  remove: deleteCategoria,
  findById: findCategoria,
  findAll: findAllCategoria,
  extraData: extraDataCategoria
} = baseController(service);