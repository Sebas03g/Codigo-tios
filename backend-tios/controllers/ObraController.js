import { baseController } from './baseController.js';
import service from '../services/ObraServices.js';

const controller = baseController(service);

controller.assign_proforma = async (req, res) => {
    try{
        const data = req.bod;
        const result = await service.assign_proforma(data.id_proforma, data.id_obra);

        if (!result) {
            return res.status(409).json({ mensaje: 'No se pudo eliminar.' });
        }
        res.status(200).json(result);

    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
}

export default controller;