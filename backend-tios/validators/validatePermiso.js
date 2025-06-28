import { body } from 'express-validator';

export const validatePermiso = [
    body('nombre')
        .notEmpty().withMessage('El campo "nombre" es obligatorio')
        .isLength({min: 5}).withMessage('El campo "nombre" debe tener por lo menos 5 caracteres'),

    body('categoria')
        .isIn(['Transaccion', 'Inventario', 'Pedido', 'Obra', 'Cliente', 'Empleado', 'Mensaje', 'Posicion', 'Proveedor', 'Tarea', 'Ubicacion']).withMessage('La categoria debe ser ABIERTO, PROCESO O CERRADO')
];