import { baseController } from './baseController.js';
import service, {permisos} from '../services/PosicionServices.js';

export const {
  create: crearPosicion,
  update: updatePosicion,
  remove: deletePosicion,
  findById: findPosicion,
  findAll: findAllPosicion
} = baseController(service);


export const obtenerPermisos = async (req, res) => {
  try{
    const id = parseInt(req.params.id);
    const result = await obtenerPermisos(id);

    if (!result) {
        return res.status(409).json({ mensaje: 'No se pudieron obtener los permisos.' });
    
    }

    res.status(200).json(result);

  } catch (error){
      console.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
}