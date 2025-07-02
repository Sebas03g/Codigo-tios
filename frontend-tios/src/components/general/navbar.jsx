import { capitalizaPrimera } from "../../services/FuncionesGenerales";

export default function NavigationBar({ paramsNavBar }){

    const { estadosNavBar, setEstadoNavBar, estadoNavBar } = paramsNavBar;

    return (
        <div>
            <nav className="flex space-x-4 bg-blue-600 text-white p-3 rounded-t-lg shadow">
                {estadosNavBar.map((estado) => (
                    <button
                        key={estado}
                        onClick={() => setEstadoNavBar(estado)}
                        className={`px-4 py-2 rounded ${
                            estadoNavBar === estado ? "bg-blue-800" : "hover:bg-blue-500"
                        }`}
                    >
                        {capitalizaPrimera(estado.toLowerCase())}
                    </button>
                ))}
            </nav>
        </div>
  );
}