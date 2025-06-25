import logger from '../utils/logger.js';

export const baseController = (service) => ({
  create: async (req, res) => {
    try {
      const data = req.body;
      const result = await service.create(data);
      if (!result) {
        return res.status(409).json({ mensaje: 'No se pudo crear.' });
      }
      res.status(201).json({ mensaje: 'Creado exitosamente.' });
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
  },

  update: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const result = await service.update(id, data);
      if (!result) {
        return res.status(409).json({ mensaje: 'No se pudo modificar.' });
      }
      res.status(200).json({ mensaje: 'Modificado exitosamente.' });
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
  },

  remove: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const data = req.body;
      const result = await service.delete(id, data);
      if (!result) {
        return res.status(409).json({ mensaje: 'No se pudo eliminar.' });
      }
      res.status(200).json({ mensaje: 'Eliminado exitosamente.' });
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
  },

  findById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const result = await service.findById(id);
      if (!result) {
        return res.status(404).json({ mensaje: 'No encontrado.' });
      }
      res.status(200).json(result);
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
  },

  findAll: async (req, res) => {
    try {
      const results = await service.findAll();
      if (!results || results.length === 0) {
        return res.status(200).json({ mensaje: 'No hay registros.' });
      }
      res.status(200).json(results);
    } catch (error) {
      console.error(error);
      logger.error(error);
      res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
  },

  extraData: async (req, res) => {
    try{
    
        const id = parseInt(req.params.id);
        const relation = req.params.relation;
        const results = await service.extraData(id, relation);
    
        if (!results) {
            return res.status(409).json({ mensaje: 'No se pudieron obtener los datos.' });
        }
        res.status(200).json(results);
    
      }catch (error){
          console.error(error);
          logger.error(error);
          res.status(500).json({ mensaje: 'Error interno del servidor.' });
      }
  },

  allExtraData: async (req, res) => {
    try{
        const relation = req.params.relation;
        const results = await service.allExtraData(relation);
    
        if (!results) {
            return res.status(409).json({ mensaje: 'No se pudieron obtener los datos.' });
        }
        res.status(200).json(results);
    
      }catch (error){
          console.error(error);
          logger.error(error);
          res.status(500).json({ mensaje: 'Error interno del servidor.' });
      }
  }
});
