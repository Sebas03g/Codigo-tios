import { body } from 'express-validator';

export const validateInventario = [
    body('precio')
        .notEmpty().withMessage('El campo "precio" es obligatorio')
        .isDecimal({ min: 0.01 }).withMessage('El campo "precio" debe ser de tipo decimal y mayor a 0.01'),
    
    body('descuento')
        .notEmpty().withMessage('El campo "descuento" es obligatorio')
        .isDecimal({ min: 0,  max: 1 }).withMessage('El campo "precio" debe ser de tipo decimal y mayor a 0 y menor o igual a 1'),
    
    body('cantidad')
        .notEmpty().withMessage('El campo "cantidad" es obligatorio')
        .isFloat({ min: 0 }).withMessage('El campo "cantidad" debe ser de tipo float y mayor a 0'),

    body('id_categoria')
        .notEmpty().withMessage('El campo "id_categoria" es obligatorio')
        .isInt().withMessage('El campo "id_categoria" debe ser de tipo entero'),
    
    body('id_ubicacion')
        .notEmpty().withMessage('El campo "id_ubicacion" es obligatorio')
        .isInt().withMessage('El campo "id_ubicacion" debe ser de tipo entero'),
    
    body('id_proveedor')
        .notEmpty().withMessage('El campo "id_proveedor" es obligatorio')
        .isInt().withMessage('El campo "id_proveedor" debe ser de tipo entero'),
    
    body('estado')
        .optional()
        .isIn(['NUEVO', 'USADO', 'VIEJO', 'DAÑADO']).withMessage('El estado debe ser NUEVO, USADO, VIEJO O DAÑADO')

];