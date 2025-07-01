import TablaUbicacion from "../../components/Tables/TablaUbicacion.jsx";
import { AiOutlinePlus } from "react-icons/ai";

export default function UbicacionesPage({busqueda, handleInputChange, handleAgregar, dataTable, onSeleccionar}){
    return(
        <div className="h-full flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Ubicaciones</h1>

            <div className="flex items-center gap-2 mb-6">
            <input
                type="text"
                value={busqueda}
                onChange={handleInputChange}
                placeholder="Nombre..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                onClick={handleAgregar}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                <AiOutlinePlus className="text-lg" />
                <span className="hidden sm:inline">Agregar</span>
            </button>
            </div>

            <TablaUbicacion
                datos={dataTable}
                onSeleccionar={onSeleccionar}
                filtros={busqueda}
            />
        </div>
    );
}