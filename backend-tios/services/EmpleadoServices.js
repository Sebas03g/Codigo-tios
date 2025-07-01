import repo from '../repository/EmpleadoRepository.js';
import { baseService } from './baseServices.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const service = baseService(repo);

service.create = async (data) => {
  data.password = await bcrypt.hash(data.password, 10);
  return await repo.create(data);
};

export default service;

export const login = async (cedula, password) => {
  const empleado = await repo.findByCedula(cedula);
  if (!empleado) throw new Error('Empleado No Encontrado');

  const passwordValida = await bcrypt.compare(password, empleado.password);
  
  if (!passwordValida) throw new Error("Contraseña Inválida");

  const data = await repo.getPermisos(empleado.id);

  const permisosEmpleado = data.permisos.map(p => p.nombre);
  const categoriasEmpleado = data.permisos.map(p => p.categoria);

  const token = jwt.sign(
    {
      id: empleado.id,
      permisos: permisosEmpleado,
      categorias: categoriasEmpleado,
    },
    process.env.JWT_SECRET || 'secreto',
    { expiresIn: '10h' }
  );

  return token;
};

export const updatePass = async (cedula, password) => {
  const empleado = await repo.findByCedula(cedula);
  if (!empleado) throw new Error('Empleado No Encontrado');

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await repo.updatePassword(cedula, encryptedPassword);
};

export const getAllData = async () => {
  const empleados = await repo.getAllData();
  if (!empleados) throw new Error("Error en obtener los empleados");
  return empleados;
}