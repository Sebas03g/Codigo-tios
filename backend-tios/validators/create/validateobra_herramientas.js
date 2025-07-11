import { body } from 'express-validator';

export const validateobra_herramientas = [
    body('horas')
        .notEmpty().withMessage('El campo "horas" es obligatorio')
        .isInt({min: 0}).withMessage('El campo "horas" debe ser de tipo entero'),

    body('id_obra')
        .notEmpty().withMessage('El campo "id_obra" es obligatorio')
        .isInt().withMessage('El campo "id_obra" debe ser de tipo entero'),
    
    body('id_herramienta')
        .notEmpty().withMessage('El campo "id_herramienta" es obligatorio')
        .isInt().withMessage('El campo "id_herramienta" debe ser de tipo entero'),

];