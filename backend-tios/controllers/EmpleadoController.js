import { baseController } from './baseController.js';
import service, { login, updatePass, getAllData } from '../services/EmpleadoServices.js';

const {
  create,
  update,
  remove,
  findById,
  findAll,
  extraData,
  allExtraData,
  dataAllRelations,
  allDataAllRelations
} = baseController(service);

const loginEmpleado = async (req, res) => {
  try {
    const { cedula, password } = req.body;

    if (!cedula?.trim() || !password?.trim()) {
      return res.status(400).json({ mensaje: 'Cédula y contraseña son obligatorias.' });
    }

    const token = await login(cedula, password);

    res.status(200).json({ token });

  } catch (error) {
    console.error(error.message);
    res.status(401).json({ mensaje: 'Cédula o contraseña incorrectos.' });
  }
};

const updatePassword = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const { password } = req.body;

    if (!password?.trim()) {
      return res.status(400).json({ mensaje: 'Nueva contraseña es obligatoria.' });
    }

    const empleado = await updatePass(id, password);

    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.status(200).json({ mensaje: 'Contraseña modificada exitosamente.' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

const getAllEmpleadoData = async (req, res) => {
  try {
    const empleados = await getAllData();

    if (!empleados || empleados.length === 0) {
      return res.status(404).json({ mensaje: 'No se encontraron empleados.' });
    }

    res.status(200).json(empleados);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

export default {
  create,
  update,
  remove,
  findById,
  findAll,
  extraData,
  allExtraData,
  loginEmpleado,
  updatePassword,
  dataAllRelations,
  allDataAllRelations,
  getAllEmpleadoData
};
