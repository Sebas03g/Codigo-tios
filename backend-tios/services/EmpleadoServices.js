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

  const token = jwt.sign(
    { id: empleado.id, permisos: empleado.posicion },
    process.env.JWT_SECRET || 'secreto',
    { expiresIn: '10h' }
  );

  return token, empleado.id;
};

export const update = async (cedula, password) => {
  const empleado = await repo.findByCedula(cedula);
  if (!empleado) throw new Error('Empleado No Encontrado');

  const encryptedPassword = await bcrypt.hash(password, 10);
  return await repo.updatePassword(cedula, encryptedPassword);
};
