import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [csrfToken, setCsrfToken] = useState(null);
  const [permisos, setPermisos] = useState([]);
  const [user, setUser] = useState(null);
  const isAuth = !!token;

  useEffect(() => {
    if (token) localStorage.setItem('token', token);
    else localStorage.removeItem('token');
  }, [token]);

  const login = async (credenciales) => {
    const res = await fetch('http://localhost:3000/empleado', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credenciales),
    });

    const data = await res.json();
    if (data.token) {
      setToken(data.token);
      await cargarPermisosUsuario(data.token);
    }

    const csrfRes = await fetch('http://localhost:3000/csrf-token', {
      credentials: 'include'
    });
    const { csrfToken } = await csrfRes.json();
    setCsrfToken(csrfToken);
  };

  const cargarPermisosUsuario = async (token) => {
    const res = await fetch('http://localhost:3000/empleado/permisos', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      },
    });

    const data = await res.json();
    setPermisos(data.permisos || []);
    setUser(data.usuario || null);
  };

  const logout = () => {
    setToken(null);
    setCsrfToken(null);
    setPermisos([]);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ token, csrfToken, permisos, user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
