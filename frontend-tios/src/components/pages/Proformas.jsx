import TablaPersonas from "../Tables/TablaPersonas.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import TablaProformas from "../Tables/TablaProformas.jsx";

export default function ProformasPage({
  nombre,
  cliente,
  handleInputChange,
  handleAgregar,
  dataTable,
  onSeleccionar,
}) {
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Proformas</h1>

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
            name="cliente"
            value={cliente}
            onChange={handleInputChange}
            placeholder="Cliente..."
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

      <TablaProformas
        datos={dataTable}
        onSeleccionar={onSeleccionar}
        cliente={cliente}
        nombre={nombre}
      />
    </div>
  );
}
