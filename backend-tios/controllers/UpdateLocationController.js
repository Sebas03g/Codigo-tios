import logger from '../utils/logger.js';
import service from '../services/UpdateLocationServices.js'

export default async function updateLocation({req, res}){
    try {
      const data = req.body;
      const id = req.params.id;
      const result = await service(id, data);
      if (!result) {
        return res.status(500).json({ mensaje: 'Error interno del servidor.' });
      }
      res.status(201).json({ mensaje: 'Ubicacion actualizada exitosamente.' });
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
}