import Mapa from "../../MapContainer.jsx";
import { IoClose } from "react-icons/io5";


export default function UbicacionBase({formData, punto, setPunto, setOpen, handleSubmit, handleChange}){
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Crear Ubicacion</h2>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="text-red-500 text-xl hover:text-red-700"
                    >
                      <IoClose />
                    </button>
                  </div>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="descripcion">Descripcion</label>
                <input
                    className="w-full px-3 py-2 border border-gray-300 rounded"
                    type="text"
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleChange}
                    required
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