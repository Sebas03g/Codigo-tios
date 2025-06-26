

export default function Home() {
  /*const token = localStorage.getItem('token');
  const csrf = localStorage.getItem('csrf');
  const posicion = token ? jwtDecode(token).posicion : "";*/


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Bienvenido a mi app</h1>
      <p className="text-lg text-center mb-6">
        Esta es una página de ejemplo usando Tailwind CSS con React y Vite.
      </p>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Haz clic aquí
      </button>
    </div>
  );
}
