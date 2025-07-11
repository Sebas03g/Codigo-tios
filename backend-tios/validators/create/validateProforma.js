import { body } from 'express-validator';

export const validateProforma = [
    body('nombre')
        .notEmpty().withMessage('El campo "nombre" es obligatorio')
        .isLength({min: 5}).withMessage('El campo "nombre" debe tener por lo menos 5 caracteres'),

    body('tiempo_esperado')
        .notEmpty().withMessage('El campo "tiempo_esperado" es obligatorio')
        .isDate().withMessage('El campo "tiempo_esperado" debe ser de tipo date'),

    body('porcentaje_venta')
        .notEmpty().withMessage('El campo "porcentaje_venta" es obligatorio')
        .isDecimal({min: 0, max: 1}).withMessage('El campo "porcentaje_venta" debe ser de tipo decimal y estar entre 0 y 1'),

    body('id_punto')
        .notEmpty().withMessage('El campo "id_punto" es obligatorio')
        .isInt().withMessage('El campo "id_punto" debe ser de tipo entero'),
    
    body('id_cliente')
        .notEmpty().withMessage('El campo "id_cliente" es obligatorio')
        .isInt().withMessage('El campo "id_cliente" debe ser de tipo entero'),

];