import { body } from 'express-validator';

export const validatePago = [

    body('horas')
        .notEmpty().withMessage('El campo "horas" es obligatorio')
        .isDecimal({min: 0}).withMessage('El campo "horas" debe ser de tipo decimal'),
    
    body('fecha_pago')
        .notEmpty().withMessage('El campo "fecha_pago" es obligatorio')
        .isDate().withMessage('El campo "fecha_pago" debe ser de tipo date'),
]   