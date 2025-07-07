import { AiOutlinePlus } from "react-icons/ai";
import NavigationBar from "../general/navbar";
import TablaCategoria from "../Tables/TablaCategoria";
import TablaHerramientas from "../Tables/TablaHerramientas";
import Crear from "../forms/Crear/CategoriaForm.jsx";

export default function CategoriaPage({
    paramsNavBar, paramsPage, paramsTable, 
    paramsGenerales,open, handleSubmit, setOpen,

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
              onClick={() => setOpen(true)}
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
            <TablaCategoria
                paramsTable={paramsTable}
                paramsGenerales={paramsGenerales}
            />
          }
          {estadoNavBar === "Herramienta" && 
            <TablaHerramientas
                paramsTable={paramsTable}
                paramsGenerales={paramsGenerales}
            />
          }

          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-40">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                <Crear 
                  setOpen={setOpen}
                  handleSubmit={handleSubmit}
                  tipo = {estadoNavBar.toLowerCase()}
                />
              </div>
            </div>
          )}
        </div>
      );
}