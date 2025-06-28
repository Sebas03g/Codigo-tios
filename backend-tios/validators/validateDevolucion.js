export const validateCompra = [
  body('id_transaccion')
    .notEmpty().withMessage('El campo "id_transaccion" es obligatorio')
    .isInt().withMessage('El campo "id_transaccion" debe ser un número entero'),

];