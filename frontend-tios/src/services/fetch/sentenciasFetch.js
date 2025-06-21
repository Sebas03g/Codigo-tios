const BASE_URL = 'http://localhost:3000';

const getUsuario = () => localStorage.getItem("id_usuario");

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
  'X-CSRF-Token': localStorage.getItem('csrfToken')
});

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.mensaje || 'Error de servidor');
  }
  return res.json();
};

export const getAllData = async(nombreClase) => {
  const res = await fetch(`${BASE_URL}/${nombreClase}/`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include',
  });
  return handleResponse(res);
};

export const getDataById = async(nombreClase, id) => {
  const res = await fetch(`${BASE_URL}/${nombreClase}/${id}`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include',
  });
  return handleResponse(res);
};

export const createData = async(nombreClase, data) => {
  data.createdBy = getUsuario();
  const res = await fetch(`${BASE_URL}/${nombreClase}/`, {
    method: 'POST',
    headers: getAuthHeaders(),
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const updateData = async(nombreClase, data, id) => {
  data.updatedBy = getUsuario();
  const res = await fetch(`${BASE_URL}/${nombreClase}/${id}`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    credentials: 'include',
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

export const removeData = async(nombreClase, id) => {
  const res = await fetch(`${BASE_URL}/${nombreClase}/${id}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    credentials: 'include',
    body: JSON.stringify({ deletedBy: getUsuario(),  estadoEliminado: "ELIMINADO"}),
  });
  return handleResponse(res);
};

export const extraData = async(nombreClase, id, relation) => {
  const res = await fetch(`${BASE_URL}/${nombreClase}/${id}/${relation}`, {
    method: 'GET',
    headers: getAuthHeaders(),
    credentials: 'include',
  });
  return handleResponse(res);
};
