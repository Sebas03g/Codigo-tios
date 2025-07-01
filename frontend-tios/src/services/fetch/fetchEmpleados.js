import { getTokenData } from "../getLocalStorageData.js";

const BASE_URL = 'http://localhost:3000';

const getUsuario = () => getTokenData().id;

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  'X-CSRF-Token': localStorage.getItem('csrfToken')
});

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.mensaje || 'Error de servidor');
  }
  return res.json();
};

export const getAllEmployeeData = async() => {
    const res = await fetch(`${BASE_URL}/empleado/getAllData`, {
        method: 'GET',
        headers: getAuthHeaders(),
        credentials: 'include',
    });

    return handleResponse(res);
}