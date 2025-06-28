import { body } from 'express-validator';

export const validatePedido = [

    body('id_obra')
        .notEmpty().withMessage('El campo "id_obra" es obligatorio')
        .isInt().withMessage('El campo "id_obra" debe ser de tipo entero'),
    
    body('id_transaccion')
        .notEmpty().withMessage('El campo "id_transaccion" es obligatorio')
        .isInt().withMessage('El campo "id_transaccion" debe ser de tipo entero'),

];