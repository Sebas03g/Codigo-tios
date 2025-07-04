import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { PERMISOS } from "../../../constants/permissions.js"


import 'react-datepicker/dist/react-datepicker.css';
import TareaBase from "../Base/TareaBase.jsx";

export default function TareaForm({setOpen, handleSubmit}){
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

    const handleDateChange = (date) => {
        setFormData(prev => ({
            ...prev,
            fecha_final: date,
        }));
    };

    return (
        <TareaBase
            formData={formData}
            empleados={empleados}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleDateChange = {handleDateChange}
            setOpen={setOpen}
        />
    );

}