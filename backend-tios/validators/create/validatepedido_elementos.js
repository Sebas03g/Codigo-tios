import { body } from 'express-validator';

export const validatepedido_elementos = [
    body('id_pedido')
        .notEmpty().withMessage('El campo "id_pedido" es obligatorio')
        .isInt().withMessage('El campo "id_pedido" debe ser de tipo entero'),

    body('id_elemento')
        .notEmpty().withMessage('El campo "id_elemento" es obligatorio')
        .isInt().withMessage('El campo "id_elemento" debe ser de tipo entero'),
    
    body('id_empleado')
        .notEmpty().withMessage('El campo "id_empleado" es obligatorio')
        .isInt().withMessage('El campo "id_empleado" debe ser de tipo entero'),
    
    body('estado')
        .isIn(['ABIERTO', 'PROCESO', 'CERRADO']).withMessage('El estado debe ser ABIERTO, PROCESO O CERRADO')
];