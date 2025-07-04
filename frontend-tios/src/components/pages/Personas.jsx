import TablaPersonas from "../Tables/TablaPersonas.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import CrearProveedor from "../forms/Crear/ProveedorForm.jsx"
import CrearCliente from "../forms/Crear/ClienteForm.jsx"

export default function PersonasPage({
  tipo,
  nombre,
  ruc,
  handleInputChange,
  open,
  setOpen,
  dataTable,
  onSeleccionar,
  handleSubmit,
}) {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{tipo}</h1>

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
            name="cedula"
            value={ruc}
            onChange={handleInputChange}
            placeholder="Cédula..."
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

      <TablaPersonas
        datos={dataTable}
        onSeleccionar={onSeleccionar}
        ruc={ruc}
        nombre={nombre}
      />

      {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-40">
              <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                {tipo === "Proveedores" ? (
                  <CrearProveedor 
                      setOpen={setOpen}
                      handleSubmit={handleSubmit}
                  />
                ) : (
                  <CrearCliente 
                      setOpen={setOpen}
                      handleSubmit={handleSubmit}
                  />
                )}
                  
              </div>
          </div>
      )}

    </div>
  );
}
