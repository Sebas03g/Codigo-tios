import { body } from 'express-validator';

export const validateProceso = [
    body('nombre')
        .notEmpty().withMessage('El campo "nombre" es obligatorio')
        .isLength({min: 5}).withMessage('El campo "nombre" debe tener por lo menos 5 caracteres'),
    
    body('descripcion')
        .notEmpty().withMessage('El campo "descripcion" es obligatorio')
        .isLength({min: 5}).withMessage('El campo "descripcion" debe tener por lo menos 5 caracteres'),
    
    body('id_proforma')
        .optional()
        .isInt().withMessage('El campo "id_proforma" debe ser de tipo entero'),
    
    body('id_obra')
        .optional()
        .isInt().withMessage('El campo "id_obra" debe ser de tipo entero'),
];