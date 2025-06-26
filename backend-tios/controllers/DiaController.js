import { baseController } from './baseController.js';
import service from '../services/DiaServices.js';

const {
  create,
  update,
  remove,
  findById,
  findAll
} = baseController(service);

export default {
  create,
  update,
  remove,
  findById,
  findAll
};
