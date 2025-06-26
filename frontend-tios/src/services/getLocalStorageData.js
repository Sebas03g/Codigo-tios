import { jwtDecode } from 'jwt-decode';

export const getTokenData = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;
  return jwtDecode(token);
};