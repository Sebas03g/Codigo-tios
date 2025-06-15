import * as api from './apiService.js'; 
const clase = 'empleado';  
export const createEmpleado = async (data) => {
  return await api.create(data, clase);
};

export const findEmpleado = async (id) => {
  return await api.findById(id, clase);
};

export const findAllEmpleado = async () => {
  return await api.findAll(clase);
};

export const updateEmpleado = async (data, id) => {
  return await api.update(data, clase, id);
};

export const deleteEmpleado = async (id) => {
  return await api.remove(clase, id);
};
