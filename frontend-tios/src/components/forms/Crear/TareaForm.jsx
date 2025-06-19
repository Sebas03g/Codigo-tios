import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { PERMISOS } from "../../../constants/permissions.js"

export default function TareaForm({onClose}){
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        id_asignador: localStorage.getItem("id_usuario"),
        id_asignado: "",
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

}