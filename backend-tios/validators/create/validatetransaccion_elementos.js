import { body } from 'express-validator';

export const validatetransaccion_elementos = [
    body('cantidad')
        .notEmpty().withMessage('El campo "cantidad" es obligatorio')
        .isInt({min: 0}).withMessage('El campo "cantidad" debe ser de tipo entero y mayor a 0'),

    body('id_transaccion')
        .notEmpty().withMessage('El campo "id_transaccion" es obligatorio')
        .isInt().withMessage('El campo "id_transaccion" debe ser de tipo entero'),

    body('id_elemento')
        .notEmpty().withMessage('El campo "id_elemento" es obligatorio')
        .isInt().withMessage('El campo "id_elemento" debe ser de tipo entero'),
    
];