import Mapa from "../../MapContainer.jsx";
import { IoClose } from "react-icons/io5";


export default function ObraBase({
    formData, punto, setPunto,
    setOpen, handleSubmit,
    cliente, handleCliente, handleDateChange
}){
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Crear Obra</h2>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-red-500 text-xl hover:text-red-700"
                    >
                      <IoClose />
                    </button>
                  </div>
            <div>
                <label htmlFor="nombre_proyecto">Nombre del Proyecto</label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="nombre_proyecto"
                    value={formData.nombre_proyecto}
                    onChange={handleDateChange}
                    required
                />
            </div>
            <div>
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={handleCliente}
                >
                    {cliente ? "Modificar": "Cliente"}
                </button>
                {cliente && (
                    <div className="text-sm text-gray-700">
                        <p><span className="font-semibold">Cliente:</span> {cliente.nombre}</p>
                        <p><span className="font-semibold">RUC:</span> {cliente.ruc}</p>
                    </div>
                )}
            </div>
            <div>
                <label htmlFor="fecha_final">Seleccionar Tiempo a completar</label><br/>
                <input
                    type="date"
                    name="fecha_final"
                    value={formData.fecha_final}
                    onChange={handleDateChange}
                    className="px-3 py-2 border border-gray-300 rounded-md"
                />
            </div>
            <div>
                <label htmlFor="porcentaje_venta">Porcentaje de Venta</label><br/>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="number"
                    name="porcentaje_venta"
                    min={0}
                    max={100}
                    value={formData.porcentaje_venta}
                    onChange={handleDateChange}
                />

            </div>
            <Mapa 
                punto={punto}
                setPunto={setPunto}
            />
            <button
                type="submit"
                className="block w-full max-w-xs mx-auto bg-blue-500 text-white p-3 rounded text-lg hover:bg-blue-600 transition"
            >    
                Crear
            </button>
        </form>
    );
}