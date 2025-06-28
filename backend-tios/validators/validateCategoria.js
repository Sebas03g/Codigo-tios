import { body } from 'express-validator';

export const validarCategoria = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 5 }).withMessage('El nombre debe tener almenos 5 caracteres'),

    body('descripcion')
        .notEmpty().withMessage('La descripcion es obligatoria')
        .isLength({ min: 5 }).withMessage('El nombre debe tener almenos 5 caracteres'),
    
    body('tipo')
        .notEmpty().withMessage('El tipo es obligatorio'),
    
    body('tipo_unidad')
        .notEmpty().withMessage('El tipo de unidad es obligatorio'),
    
    body('venta')
        .notEmpty().withMessage('La venta es obligarotia')
        .isBoolean().withMessage('La venta debe ser un booleano'),
    
    body('tiempo')
        .optional()
        .isDate().withMessage('La tiempo debe ser date.'),
    
    
]   