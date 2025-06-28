import { body } from 'express-validator';

export const validatePosicion = [
    body('nombre')
        .notEmpty().withMessage('El campo "nombre" es obligatorio')
        .isLength({min: 5}).withMessage('El campo "nombre" debe tener por lo menos 5 caracteres'),
];