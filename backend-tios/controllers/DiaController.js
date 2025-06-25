import { baseController } from './baseController.js';
import service from '../services/DiaServices.js';

export default {
  create,
  update,
  remove,
  findById,
  findAll
} = baseController(service);
