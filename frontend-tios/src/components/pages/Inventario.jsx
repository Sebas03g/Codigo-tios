import TablaCategoriaHerramienta from "../Tables/TablaCategoriaHerramienta";
import TablaCategoriaInventario from "../Tables/TablaCategoriaInventario";
import TablaHistorialElementos from "../Tables/TablaHistorialElemento";
import { AiOutlinePlus } from "react-icons/ai";
import NavigationBar from "../general/navbar";
import Crear from "../forms/Transacciones/Funcionalidad/ElementoCompra";

export default function InventarioPage({
    tableData, nombre, ubicacion, tipo,categoria, 
    handleInputChange, onSeleccionar, handleAgregar,
    open, setOpen, handleSubmit,paramsNavBar
}){
  const {estadosNavBar, setEstadoNavBar, estadoNavBar} = paramsNavBar;
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
                {categoria.mantenimiento && (
                  <span
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                      Mantenimiento: {categoria.mantenimiento}
                  </span>
                )}
            </div>
    
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">

                {estadoNavBar==="Inventario" && (
                  <input
                    type="text"
                    name="ubicacion"
                    value={ubicacion}
                    onChange={handleInputChange}
                    placeholder="Ubicacion..."
                    className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                )}

              
              <input
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
                placeholder="Nombre..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              {estadoNavBar === "Historial" && (
                <select
                  name="tipo"
                  value={tipo || ""}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  required
                >
                  <option value="">-- Todos --</option>
                  {["Compras", "Ventas", "Devoluciones"].map((tp,indice) => (
                    <option key={indice} value={tp}>
                      {tp}
                    </option>
                  ))}
                </select>
              )}
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

          {estadoNavBar === "Inventario" ? (
            categoria.tipo === "Inventario" ? (
              <TablaCategoriaInventario
                datos={tableData}
                onSeleccionar={onSeleccionar}
                nombre={nombre}
                ubicacion={ubicacion}
              />
            ) : (
              <TablaCategoriaHerramienta
                datos={tableData}
                onSeleccionar={onSeleccionar}
                nombre={nombre}
                ubicacion={ubicacion}
              />
            )
          ) : (
            <TablaHistorialElementos
              datos={tableData}
              onSeleccionar={onSeleccionar}
              nombre={nombre}
            />
          )}

          {open && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-40">
              <div className="bg-white p-6 rounded-xl shadow-xl fill-w max-h-[90vh] overflow-y-auto">
                <Crear 
                  setOpen={setOpen}
                  handleSubmit={handleSubmit}
                  categoria={categoria}
                />
              </div>
            </div>
          )}


        </div>
      );
}