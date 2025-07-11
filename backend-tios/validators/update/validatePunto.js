import { body } from 'express-validator';

export const validatePunto = [
    body('lat')
        .notEmpty().withMessage('El campo "lat" es obligatorio')
        .isDecimal().withMessage('El campo "lat" debe ser de tipo decimal'),

    body('lng')
        .notEmpty().withMessage('El campo "lng" es obligatorio')
        .isDecimal().withMessage('El campo "lng" debe ser de tipo decimal'),
];