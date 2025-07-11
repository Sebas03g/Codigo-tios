import { body } from 'express-validator';

export const validateHorario = [
    body('hora_inicio')
        .notEmpty().withMessage('El campo "hora_inicio" es obligatorio')
        .isDate().withMessage('El campo "hora_inicio" debe ser de tipo date'),
    
    body('hora_final')
        .notEmpty().withMessage('El campo "hora_final" es obligatorio')
        .isDate().withMessage('El campo "hora_final" debe ser de tipo date'),

];