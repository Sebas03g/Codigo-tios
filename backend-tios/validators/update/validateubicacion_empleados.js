import { body } from 'express-validator';

export const validateubicacion_empleados = [
     body('id_punto')
        .notEmpty().withMessage('El campo "id_punto" es obligatorio')
        .isInt().withMessage('El campo "id_punto" debe ser de tipo entero'),
    
     body('id_empleado')
        .notEmpty().withMessage('El campo "id_empleado" es obligatorio')
        .isInt().withMessage('El campo "id_empleado" debe ser de tipo entero'),
    
    body('estado')
        .isIn(['TRABAJANDO', 'FUERA', 'DESACTIVO']).withMessage('El estado debe ser TRABAJANDO, FUERA O DESACTIVO'),
    
    body('fecha')
        .notEmpty().withMessage('El campo "fecha" es obligatorio')
        .isDate().withMessage('El campo "fecha" debe ser de tipo date'),

]   