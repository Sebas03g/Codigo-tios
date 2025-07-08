import repo from '../repository/EmpleadoRepository.js';
import { baseService } from './baseServices.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { enviarCorreoSinArchivo } from './MailServices.js';

const service = baseService(repo);

function generarPassword(longitud = 10) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    password += caracteres[randomIndex];
  }
  return password;
}

service.create = async (data) => {
  data.password = generarPassword();
  console.log('AQUIII 2')
  console.log(data);

  await enviarCorreoSinArchivo({
    to: data.mail,
    subject: "Creación cuenta de Hidrogas",
    text: "",
    html: `<h1>Creación cuenta de la aplicación Hidrogas</h1><br/><p>Clave Temporal:</p><br/><h2>${data.password}</h2></br><a href="http://localhost:5173/">Enlace aquí</a>`
  });


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

  let token;

  console.log("FECHA");
  console.log(empleado.fecha_inicio);

  if (empleado.fecha_inicio == null) {
    await repo.update(empleado.id, { fecha_inicio: new Date() });

    token = jwt.sign(
      {
        id: empleado.id,
        permisos: permisosEmpleado,
        categorias: categoriasEmpleado,
        primera: true,
      },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '10h' }
    );

  } else {
    token = jwt.sign(
      {
        id: empleado.id,
        permisos: permisosEmpleado,
        categorias: categoriasEmpleado,
      },
      process.env.JWT_SECRET || 'secreto',
      { expiresIn: '10h' }
    );
  }

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