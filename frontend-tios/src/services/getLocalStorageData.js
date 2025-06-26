import { jwtDecode } from 'jwt-decode';

export function getTokenData() {
  const token = localStorage.getItem('authToken');

  if (!token || token.split('.').length !== 3) {
    console.warn('Token inválido o mal formado:', token);
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (err) {
    console.error('Error al decodificar JWT:', err);
    return null;
  }
}