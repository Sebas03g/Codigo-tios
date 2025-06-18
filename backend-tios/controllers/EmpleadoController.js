import { baseController } from './baseController.js';
import service, {login, update} from '../services/EmpleadoServices.js';

export const {
  create: crearEmpleado,
  update: updateEmpleado,
  remove: deleteEmpleado,
  findById: findEmpleado,
  findAll: findAllEmpleado,
  extraData: extraDataEmpleado
} = baseController(service);

export const loginEmpleado = async (req, res) => {
    try{
        const {cedula, password} = req.body;
        const token = await login(cedula, password);
        if(!token){
            return res.status(400).json({mensaje : 'Datos invalidos.'})
   
        }
        res.status(200).json({token});
    } catch (error){
        console.log(error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }
}

export const updatePassword = async (req, res) => {
    try{
        const {cedula, password} = req.body;
        const empleado = await update(cedula, password);
        if(!empleado){
            return res.status(400).json({mensaje : 'Datos invalidos.'})
        }
        res.status(200).json({mensaje: 'Contraseña modificada exitosamente.'});
    } catch (error){
        console.log(error);
        res.status(500).json({ mensaje: 'Error interno del servidor.' });
    }

}