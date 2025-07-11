import { getTokenData } from "../getLocalStorageData.js";

const BASE_URL = 'http://localhost:3000/empleado/password';

const getUsuario = () => getTokenData()?.id;

const getAuthHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
  'X-CSRF-Token': localStorage.getItem('csrfToken') || '', // fallback en caso de que no exista
});

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json().catch(() => ({})); // prevenir errores si no hay JSON
    throw new Error(error.mensaje || 'Error de servidor');
  }
  return res.json();
};

export const updatePassword = async (password) => {
  const id = getUsuario();
  if (!id) throw new Error("ID de usuario no disponible");

  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    credentials: 'include', // si estás usando cookies para sesión
    body: JSON.stringify({ password }),
  });

  return handleResponse(res);
};
