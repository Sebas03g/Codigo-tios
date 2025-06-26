import { extraData, getDataById } from './sentenciasFetch';
import tokenCsrf from './fetchCsrf.js'; 

const fetchLogin = async (credenciales) => {
  try {
    const res = await fetch('http://localhost:3000/empleado/login', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credenciales),
    });

    if (!res.ok) {
      return { mensaje: "Datos inválidos", valido: false };
    }

    const data = await res.json();

    localStorage.setItem("authToken", data.token);
    
    const csrf = await tokenCsrf(credenciales);
    
    if (!csrf.ok) {
      return { mensaje: "Error en la verificación CSRF, intente nuevamente", valido: false };
    }

    const csrfData = await csrf.json();
    localStorage.setItem("csrfToken", csrfData.csrfToken);

    return { mensaje: "Inicio de sesión exitoso", valido: true };

  } catch (error) {
    console.error("Error en login:", error);
    return { mensaje: "Ocurrió un error inesperado", valido: false };
  }
};

export default fetchLogin;
