import { body } from 'express-validator';

export const validateDia = [
  body('nombre')
    .notEmpty().withMessage('El campo "nombre" es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('El nombre solo debe contener letras')
    .isLength({ min: 5 }).withMessage('El nombre debe tener almenos 5 caracteres'),
];