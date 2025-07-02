import { AiOutlinePlus } from "react-icons/ai";
import NavigationBar from "../general/navbar";
import TablaInventario from "../Tables/TablaInventario";
import TablaHerramienta from "../Tables/TablaHerramienta";

export default function InventarioPage({
    paramsNavBar, paramsPage, paramsTable, paramsGenerales
}){
    const { handleAgregar, handleInputChange } = paramsPage;
    const { codigo, nombre } = paramsGenerales;
    const { estadosNavBar, setEstadoNavBar, estadoNavBar } = paramsNavBar;

    return (
        <div className="h-full flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Categorias {estadoNavBar}</h1>
        
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
                placeholder="Nombre..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="codigo"
                value={codigo}
                onChange={handleInputChange}
                placeholder="Codigo..."
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

          <NavigationBar
            paramsNavBar={paramsNavBar}
          />

          {estadoNavBar === "Inventario" && 
            <TablaInventario
                paramsTable={paramsTable}
                paramsGenerales={paramsGenerales}
            />
          }
          {estadoNavBar === "Herramientas" && 
            <TablaHerramienta
                paramsTable={paramsTable}
                paramsGenerales={paramsGenerales}
            />
          }
        </div>
      );
}