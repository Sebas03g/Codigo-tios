import * as api from './apiService.js';
import http from './http.js';
const clase = 'posicion';  

export const createPosicion = async (data) => {
  return await api.create(data, clase);
};

export const findPosicion = async (id) => {
  return await api.findById(id, clase);
};

export const findAllPosicion = async () => {
  return await api.findAll(clase);
};

export const updatePosicion = async (data, id) => {
  return await api.update(data, clase, id);
};

export const deletePosicion = async (id) => {
  return await api.remove(clase, id);
};

export const getPermisos = async (id) => {
    const res = await http.get(`/posicion/permiso/${id}`)
    return res.data;
}
