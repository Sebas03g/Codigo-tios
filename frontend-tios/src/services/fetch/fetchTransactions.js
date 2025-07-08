import { getTokenData } from "../getLocalStorageData.js";

const BASE_URL = 'http://localhost:3000/inventario';

const getUsuario = () => getTokenData()?.id;

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

export const transaction = async(data, tipo) => {
    data.createdBy = getUsuario();
    const res = await fetch(`${BASE_URL}/${tipo}/`, {
        method: 'POST',
        headers: getAuthHeaders(),
        credentials: 'include',
        body: JSON.stringify(data),
    });
    return handleResponse(res);
};