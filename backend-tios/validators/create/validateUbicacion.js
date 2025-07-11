import { body } from 'express-validator';

export const validateUbicacion = [
    body('nombre')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 5 }).withMessage('El nombre debe tener almenos 5 caracteres'),
    
    body('descripcion')
        .notEmpty().withMessage('La descripcion es obligatoria')
        .isLength({ min: 5 }).withMessage('El nombre debe tener almenos 5 caracteres'),
    
    body('id_punto')
        .notEmpty().withMessage('El campo "id_punto" es obligatorio')
        .isInt().withMessage('El campo "id_punto" debe ser de tipo entero'),
    
]   