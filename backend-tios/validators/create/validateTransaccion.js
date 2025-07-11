import { body } from 'express-validator';

export const validateTransaccion = [
    body('fecha')
        .notEmpty().withMessage('El campo "fecha" es obligatorio')
        .isDate().withMessage('El campo "fecha" debe ser de tipo date'),

    body('id_empleado')
        .notEmpty().withMessage('El campo "id_empleado" es obligatorio')
        .isInt().withMessage('El campo "id_empleado" debe ser de tipo entero'),
    
    body('id_persona')
        .optional()
        .notEmpty().withMessage('El campo "id_cliente" es obligatorio')
        .isInt().withMessage('El campo "id_cliente" debe ser de tipo entero'),

    body('id_obra')
        .optional()
        .notEmpty().withMessage('El campo "id_obra" es obligatorio')
        .isInt().withMessage('El campo "id_obra" debe ser de tipo entero'),

];