import { useState, useEffect } from "react";
import { PERMISOS } from "../../../constants/permissions.js";
import * as sentences from "../../../services/fetch/sentenciasFetch.js"

export default function PosicionForm({onClose}){
    const [formData, setFormData] = useState({
        nombre: "",
        permisos: []
    });

    const [permisos, setPermisos] = useState([]);

    useEffect(() => {
        const fetchPermisos = async () => {
            try{
                const data = await sentences.getAllData("permiso")
                setPermisos(data);
            } catch (error) {
                console.log("Error al cargar permisos", error);
            }
        };
        fetchPermisos();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleCheck = (e) => {
        const { checked, value } = e.target;

        setFormData(prev => ({
            ...prev,
            permisos: checked
                ? [...prev.permisos, value]
                : prev.permisos.filter(p => p !== value)
        }));
    };


    return (

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <button
                type="button"
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-red-500"
            >
                ✖ Cerrar
            </button>
            <h2 className="text-xl font-bold mb-4">Crear Posicion</h2>
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
                <label>Permisos</label>
                <div>
                    {permisos.map((permiso) => (
                        <div key={permiso.id}>
                            <label>
                            <input
                                type="checkbox"
                                value={permiso.id}
                                checked={formData.permisos.includes(String(permiso.id))}
                                onChange={handleCheck}
                            />
                            {permiso.nombre}
                            </label>
                        </div>
                    ))}

                </div>
            </div>
        </form>

    );

}