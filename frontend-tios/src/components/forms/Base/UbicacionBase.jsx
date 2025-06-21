import Mapa from "../../MapContainer.jsx"

export default function UbicacionBase({formData, punto, setPunto, onClose, handleSubmit, handleChange}){
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <button
                type="button"
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-red-500"
            >
                ✖ Cerrar
            </button>
            <h2 className="text-xl font-bold mb-4">Crear Ubicacion</h2>
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
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
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
                Crear
            </button>
        </form>
    );
}