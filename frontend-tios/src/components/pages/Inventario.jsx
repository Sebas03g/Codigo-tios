import TablaCategoriaHerramienta from "../Tables/TablaCategoriaHerramienta";
import TablaCategoriaInventario from "../Tables/TablaCategoriaInventario";
import { AiOutlinePlus } from "react-icons/ai";

export default function InventarioPage({
    tableData, ruc, ubicacion,categoria, 
    handleInputChange, onSeleccionar, handleAgregar 
}){
    return (
        <div className="h-full flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{categoria.nombre}</h1>

          <div className="flex flex-wrap gap-2 mb-4">
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                    Codigo: {categoria.codigo}
                </span>
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                    Tipo de Unidad: {categoria.tipo_unidad}
                </span>
                <span
                    className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                >
                    Descripcion: {categoria.descripcion}
                </span>
            </div>
    
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                name="nombre"
                value={ubicacion}
                onChange={handleInputChange}
                placeholder="Ubicacion..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="cedula"
                value={ruc}
                onChange={handleInputChange}
                placeholder="RUC..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              onClick={handleAgregar}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
            >
              <AiOutlinePlus className="text-lg" />
              <span className="hidden sm:inline">Agregar</span>
            </button>
          </div>

          {categoria.tipo === "Inventario" ? (
            <TablaCategoriaInventario
                datos={tableData}
                onSeleccionar={onSeleccionar}
                ruc={ruc}
                ubicacion={ubicacion}
            />
          ) : (
            <TablaCategoriaHerramienta
                datos={tableData}
                onSeleccionar={onSeleccionar}
                ruc={ruc}
                ubicacion={ubicacion} 
            />
          )}
    
          
        </div>
      );
}