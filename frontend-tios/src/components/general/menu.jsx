import { Link } from 'react-router-dom';

export default function MenuComponent({isOpen, setIsOpen, categorias}){

    return (
        <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        >
        <nav className="flex flex-col p-6 space-y-4">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
            Menú
            </h2>

            {categorias.includes("Empleado") && (
            <Link
                to="/empleados"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Empleados
            </Link>
            )}
            {categorias.includes("Proveedor") && (
            <Link
                to="/proveedores"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Proveedores
            </Link>
            )}
            {categorias.includes("Cliente") && (
            <Link
                to="/clientes"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Clientes
            </Link>
            )}
            {categorias.includes("Posicion") && (
            <Link
                to="/posiciones"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Posiciones
            </Link>
            )}
            {categorias.includes("Ubicacion") && (
            <Link
                to="/ubicaciones"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Ubicaciones
            </Link>
            )}
            {categorias.includes("Tarea") && (
            <Link
                to="/tareas"
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded transition"
                onClick={() => setIsOpen(false)}
            >
                Tareas
            </Link>
            )}
        </nav>
        </aside>

    );
}