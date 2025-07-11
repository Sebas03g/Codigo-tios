import { body } from 'express-validator';

export const validatePersona = [
  body('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isLength({ max: 100 }).withMessage('El nombre debe tener máximo 100 caracteres'),

  body('ruc')
    .notEmpty().withMessage('El RUC es obligatorio')
    .isLength({ min: 10, max: 13 }).withMessage('El RUC debe tener entre 10 y 13 caracteres'),

  body('mail')
    .notEmpty().withMessage('El correo es obligatorio')
    .isEmail().withMessage('El correo no es válido'),

  body('telefono')
    .notEmpty().withMessage('El teléfono es obligatorio')
    .matches(/^\d{7,10}$/).withMessage('El teléfono debe contener solo números y entre 7 y 10 dígitos'),

  body('proveedor')
    .isBoolean().withMessage('El campo proveedor debe ser booleano'),

  // Campos opcionales (Prisma los permite null)
  body('updatedBy')
    .optional()
    .isInt().withMessage('updatedBy debe ser un número entero'),

  body('deletedBy')
    .optional()
    .isInt().withMessage('deletedBy debe ser un número entero')
];
