
import { baseController } from './baseController.js';
import service, { login, updatePass, getAllData } from '../services/EmpleadoServices.js';

const {
  create,
  update,
  remove,
  findById,
  findAll,
  extraData,
  allExtraData
} = baseController(service);

const loginEmpleado = async (req, res) => {
  try {
    const { cedula, password } = req.body;


    if (!cedula || !password) {
      return res.status(400).json({ mensaje: 'Cédula y contraseña son obligatorias.' });
    }

    const token = await login(cedula, password);

    res.status(200).json({token});

  } catch (error) {
    console.error(error.message);
    res.status(401).json({ mensaje: 'Cédula o contraseña incorrectos.' });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { cedula, password } = req.body;

    if (!cedula || !password) {
      return res.status(400).json({ mensaje: 'Cédula y nueva contraseña son obligatorias.' });
    }

    const empleado = await updatePass(cedula, password);

    if (!empleado) {
      return res.status(404).json({ mensaje: 'Empleado no encontrado.' });
    }

    res.status(200).json({ mensaje: 'Contraseña modificada exitosamente.' });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
};

const getAllData = async (req, res) => {
  try{
    const empleados = await getAllData();
    if (!empleados){
      return res.status(404).json({ mensaje: 'No se puedieron obtener los empleados.' });
    }

    res.status(200).json(empleados);
  }catch (error) {
    console.error(error.message);
    res.status(500).json({ mensaje: 'Error interno del servidor.' });
  }
}

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
    getAllData
};