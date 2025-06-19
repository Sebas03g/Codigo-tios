import { useState } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import Mapa from "../../MapContainer.jsx"

export default function UbicacionForm({onClose}){
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        id_punto: ""
    });
    const [punto, setPunto] = useState({
        lat: -0.22985,
        lng: -78.52495
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    
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
        </form>
    );
}