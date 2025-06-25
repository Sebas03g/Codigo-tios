import { useState } from "react";

import { getTokenData } from "../../services/getLocalStorageData";

export default function MenuComponent({isOpen, setIsOpen, categorias}){

    return (
        <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="flex flex-col p-4 space-y-4">

            {categorias.includes("Empleado") && (
                <Link
                    to = {`/empleados`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Empleados
                </Link>
            )}
            {categorias.includes("Proveedor") && (
                <Link
                    to = {`/proveedores`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Proveedores
                </Link>
            )}
            {categorias.includes("Cliente") && (
                <Link
                    to = {`/clientes`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Clientes
                </Link>
            )}
            {categorias.includes("Posicion") && (
                <Link
                    to = {`/posiciones`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Posiciones
                </Link>
            )}
            {categorias.includes("Ubicacion") && (
                <Link
                    to = {`/ubicaciones`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Ubicaciones
                </Link>
            )}
            {categorias.includes("Tarea") && (
                <Link
                    to = {`/tareas`}
                    className="text-gray-700 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                >
                    Tareas
                </Link>
            )}
            
        </nav>
      </aside>
    );
}