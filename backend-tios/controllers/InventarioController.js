import { baseController } from './baseController.js';
import service from '../services/InventarioServices.js';

const controller = baseController(service);

controller.purchase = async(req, res) => {
    try{
        const data = req.body;
        const result = await service.purchase(data);
        if (!result) {
            return res.status(409).json({ mensaje: 'No se pudo comprar el inventario.' });
        }
        res.status(201).json({ mensaje: 'Compra exitosa.' });
    
    }catch(error){
        console.error(error);
        logger.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
}
controller.sell = async(req, res) => {
    try{
        const data = req.body;
        const result = await service.sell(data);
        if (!result) {
            return res.status(409).json({ mensaje: 'No se pudo comprar el inventario.' });
        }
        res.status(201).json({ mensaje: 'Compra exitosa.' });
    
    }catch(error){
        console.error(error);
        logger.error(error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
}

export default controller;
