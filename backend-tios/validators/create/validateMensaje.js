import { body } from 'express-validator';

export const validateMensaje = [
    body('texto')
        .notEmpty().withMessage('El campo "texto" es obligatorio')
        .isString().withMessage('El campo "texto" debe ser de tipo string'),
    
    body('titulo')
        .notEmpty().withMessage('El campo "titulo" es obligatorio')
        .isString().withMessage('El campo "titulo" debe ser de tipo string'),
    
    body('fecha')
        .notEmpty().withMessage('El campo "fecha" es obligatorio')
        .isDate().withMessage('El campo "fecha" debe ser de tipo date'),

    body('id_remitente')
        .notEmpty().withMessage('El campo "id_remitente" es obligatorio')
        .isInt().withMessage('El campo "id_remitente" debe ser de tipo entero'),
    
    body('id_destinario')
        .notEmpty().withMessage('El campo "id_destinario" es obligatorio')
        .isInt().withMessage('El campo "id_destinario" debe ser de tipo entero'),

];