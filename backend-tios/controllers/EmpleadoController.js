import { baseController } from './baseController.js';
import service, { login, update } from '../services/EmpleadoServices.js';

export default baseController(service);

export const loginEmpleado = async (req, res) => {
  try {
    const { cedula, password } = req.body;

    if (!cedula || !password) {
      return res.status(400).json({ mensaje: 'Cédula y contraseña son obligatorias.' });
    }

    const token = await login(cedula, password);

    res.status(200).json(token);

  } catch (error) {
    console.error(error.message);
    res.status(401).json({ mensaje: 'Cédula o contraseña incorrectos.' });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { cedula, password } = req.body;

    if (!cedula || !password) {
      return res.status(400).json({ mensaje: 'Cédula y nueva contraseña son obligatorias.' });
    }

    const empleado = await update(cedula, password);

    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.status(200).json({ mensaje: 'Contraseña modificada exitosamente.' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};
