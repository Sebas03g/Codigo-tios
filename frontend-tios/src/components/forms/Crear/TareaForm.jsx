import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { PERMISOS } from "../../../constants/permissions.js"

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function TareaForm({onClose}){
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        id_asignador: localStorage.getItem("id_usuario"),
        id_asignado: "",
        fecha_final: new Date(),
    });

    
    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
    const fetchEmpleados = async () => {
        try {
        const data = await sentences.getAllData('empleado');

        const empleadosConPermiso = await Promise.all(
            data.map(async (empleado) => {
            const posicion = await sentences.extraData('posicion', empleado.posicion.id, 'permisos');
            const tienePermiso = posicion?.permisos.some(
                (permiso) => permiso.nombre === PERMISOS.RECIBIR_MENSAJES
            );
            return tienePermiso ? empleado : null;
            })
        );

        const filtrados = empleadosConPermiso.filter(Boolean);
        setEmpleados(filtrados);
        } catch (error) {
        console.log('Error al cargar empleados con permisos:', error);
        }
    };

    fetchEmpleados();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
            <h2 className="text-xl font-bold mb-4">Crear Tarea</h2>
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
                <label htmlFor="fecha">Seleccionar Tiempo a completar</label>
                <DatePicker
                    selected={formData.fecha_final}
                    onChange={handleChange}
                    showTimeSelect
                    dateFormat="Pp"
                    name="fehca"
                />
            </div>
            <div>
                <label htmlFor="id_asignado">Seleciconar Empleado</label>
                <select
                    name="id_asignado"
                    value={formData.id_asignado}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Selecciona una Empleado --</option>
                    {empleados.map((empleado) => (
                        <option key={empleado.id} value={empleado.id}>
                        {empleado.nombre}
                        </option>
                    ))}

                </select>
            </div>
        </form>
    );

}