import { body } from 'express-validator';

export const validatePermisoDependencia = [
    body('id_padre')
        .notEmpty().withMessage('El campo "id_padre" es obligatorio')
        .isInt().withMessage('El campo "id_padre" debe ser de tipo entero'),

    body('id_hijo')
        .notEmpty().withMessage('El campo "id_hijo" es obligatorio')
        .isInt().withMessage('El campo "id_hijo" debe ser de tipo entero'),
];