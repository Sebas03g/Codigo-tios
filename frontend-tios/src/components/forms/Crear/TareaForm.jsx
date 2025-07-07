import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { PERMISOS } from "../../../constants/permissions.js"


import 'react-datepicker/dist/react-datepicker.css';
import TareaBase from "../Base/TareaBase.jsx";

export default function TareaForm({setOpen, handleSubmit}){
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        id_asignado: "",
        id_ubicacion: "",
        id_obra: "",
        fecha_final: new Date(),
    });

    const [empleados, setEmpleados] = useState([]);
    const [ubicaciones, setUbicaciones] = useState([]);
    const [obras, setObras] = useState([]);

    const fetchAllData = async () => {
        try {
            const dataEmpleados = await sentences.getAllData('empleado');
            const dataUbicaciones = await sentences.getAllData('ubicacion');
            const dataObras = await sentences.getAllData('obra');
            
            setEmpleados(dataEmpleados);
            setUbicaciones(dataUbicaciones);
            setObras(dataObras);
        } catch (error) {
            console.log('Error al cargar data:', error);
        }
    };


    useEffect(() => {
    fetchAllData();
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
            handleSubmit={(e) => handleSubmit(e, formData)}
            handleDateChange = {handleDateChange}
            setOpen={setOpen}
            ubicaciones={ubicaciones}
            obras={obras}
        />
    );

}