import TablaTarea from "../Tables/TablaTareas";
import { AiOutlinePlus } from "react-icons/ai";
import Crear from "../forms/Crear/TareaForm"

export default function TareasPage({
  asignador,
  asignado,
  estado,
  nombre,
  handleEstado,
  handleInputChange,
  handleAgregar,
  dataTable,
  onSeleccionar,
  handleSubmit,
  open, setOpen
}) {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Tareas</h1>

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
            name="asignador"
            value={asignador}
            onChange={handleInputChange}
            placeholder="Asignador..."
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="asignador"
            value={asignado}
            onChange={handleInputChange}
            placeholder="Asignado..."
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-wrap gap-4">
          {["TODOS", "ABIERTA", "PROCESO", "CERRADA"].map((opcion) => (
            <label key={opcion} className="flex items-center gap-2">
              <input
                type="radio"
                value={opcion}
                checked={estado === opcion}
                onChange={handleEstado}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span>{opcion[0] + opcion.slice(1).toLowerCase()}</span>
            </label>
          ))}
        </div>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
        >
          <AiOutlinePlus className="text-lg" />
          <span className="hidden sm:inline">Agregar</span>
        </button>
      </div>

      <TablaTarea
        datos={dataTable}
        onSeleccionar={onSeleccionar}
        estado={estado}
        asignador={asignador}
        asignado={asignado}
        nombre={nombre}
      />

      {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-40">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                <Crear 
                  setOpen={setOpen}
                  handleSubmit={handleSubmit}
                />
              </div>
          </div>
      )}

    </div>
  );
}
