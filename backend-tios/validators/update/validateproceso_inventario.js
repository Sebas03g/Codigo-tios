import { body } from 'express-validator';

export const validateproceso_inventario = [
    body('cantidad')
        .notEmpty().withMessage('El campo "cantidad" es obligatorio')
        .isInt({min: 0}).withMessage('El campo "cantidad" debe ser de tipo entero y mayor a 0'),

    body('id_proforma')
        .notEmpty().withMessage('El campo "id_proforma" es obligatorio')
        .isInt().withMessage('El campo "id_proforma" debe ser de tipo entero'),

    body('id_elemento')
        .notEmpty().withMessage('El campo "id_elemento" es obligatorio')
        .isInt().withMessage('El campo "id_elemento" debe ser de tipo entero'),
    
];