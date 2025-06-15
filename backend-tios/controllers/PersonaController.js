import { baseController } from './baseController.js';
import service from '../services/PersonaServices.js';

export const {
  create: crearPersona,
  update: updatePersona,
  remove: deletePersona,
  findById: findPersona,
  findAll: findAllPersona
} = baseController(service);
