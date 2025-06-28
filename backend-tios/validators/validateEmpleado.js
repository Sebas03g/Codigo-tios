import { body } from 'express-validator';

export const validarEmpleado = [
  body('cedula')
    .notEmpty().withMessage('La cédula es obligatoria')
    .isLength({ min: 10, max: 10 }).withMessage('La cédula debe tener 10 dígitos')
    .isNumeric().withMessage('La cédula debe contener solo números'),

  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('El nombre solo debe contener letras'),

  body('apellido')
    .notEmpty().withMessage('El apellido es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('El apellido solo debe contener letras'),

  body('correo')
    .notEmpty().withMessage('El correo es obligatorio')
    .isEmail().withMessage('Debe ser un correo válido'),

  body('telefono')
    .optional()
    .isMobilePhone('es-EC').withMessage('Número de teléfono inválido'),
];


export const validarPassword = [
    body('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),

]