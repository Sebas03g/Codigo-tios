import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Crear from "../forms/Crear/ObraForm.jsx";

export default function ObrasPage({
  data,
  onSeleccion,
  handleEstadoObra,
  handlePropuesta,
  estadoObra,
  nombre,
  handleInputChange,
  open, 
  setOpen,
  handleSubmit
}) {
  const [datosObras, setDatosObras] = useState([]);

  const filterData = () => {
    const datos = data.filter(
      (dato) =>
        dato.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
        (estadoObra === "TODOS" || dato.estado === estadoObra)
    );
    setDatosObras(datos);
  };

  useEffect(() => {
    filterData();
  }, [data, estadoObra, nombre]);

  return (
    <div className="h-full flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Obras</h1>
        <div className="flex gap-4">
            <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            placeholder="Nombre..."
            className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
            onClick={handlePropuesta}
            >
            Proforma
            </button>
        </div>

        <div className="flex flex-wrap gap-4">
            {["TODOS", "ACTIVO", "CERRADO"].map((opcion) => (
            <label key={opcion} className="flex items-center gap-2">
                <input
                type="radio"
                value={opcion}
                checked={estadoObra === opcion}
                onChange={handleEstadoObra}
                className="text-blue-600 focus:ring-blue-500"
                />
                <span>{opcion[0] + opcion.slice(1).toLowerCase()}</span>
            </label>
            ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
            {datosObras.map((item) => (
            <button
                key={item.id}
                className="h-42 w-42 bg-gray-100 border rounded-xl text-center p-4 hover:bg-gray-200 shadow"
                onClick={() => onSeleccion(item)}
            >
                {item.nombre}
            </button>
            ))}
            <button 
              className="h-42 w-42 bg-green-100 border-2 border-dashed border-green-500 text-green-700 rounded-xl hover:bg-green-200 shadow"
              onClick={() => setOpen(true)}
            >
              + Agregar
            </button>
        </div>

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
