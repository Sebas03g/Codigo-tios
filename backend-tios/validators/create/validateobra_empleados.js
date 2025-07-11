import { body } from 'express-validator';

export const validateobra_empleados = [
    body('horas')
        .notEmpty().withMessage('El campo "horas" es obligatorio')
        .isInt({min: 0}).withMessage('El campo "horas" debe ser de tipo entero'),

    body('id_obra')
        .notEmpty().withMessage('El campo "id_obra" es obligatorio')
        .isInt().withMessage('El campo "id_obra" debe ser de tipo entero'),
    
    body('id_empleado')
        .notEmpty().withMessage('El campo "id_empleado" es obligatorio')
        .isInt().withMessage('El campo "id_empleado" debe ser de tipo entero'),

];