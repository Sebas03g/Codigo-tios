import { body } from 'express-validator';

export const validateproceso_empleados = [
    body('horas')
        .notEmpty().withMessage('El campo "horas" es obligatorio')
        .isInt({min: 0}).withMessage('El campo "horas" debe ser de tipo entero y mayor a 0'),

    body('id_proforma')
        .notEmpty().withMessage('El campo "id_proforma" es obligatorio')
        .isInt().withMessage('El campo "id_proforma" debe ser de tipo entero'),

    body('id_empleado')
        .notEmpty().withMessage('El campo "id_empleado" es obligatorio')
        .isInt().withMessage('El campo "id_empleado" debe ser de tipo entero'),
    
];