import { useState, useEffect } from "react";
import { PERMISOS } from "../../../constants/permissions.js";
import * as sentences from "../../../services/fetch/sentenciasFetch.js"
import PosicionBase from "../Base/PosicionBase.jsx";

export default function PosicionForm({setOpen, handleSubmit, dataForm}){

    const {formData, setFormData} = dataForm;

    const [permisos, setPermisos] = useState([]);

    useEffect(() => {
        const fetchPermisos = async () => {
            try{
                const data = await sentences.allDataAllRelations("permiso", ["comoHijo"])
                setPermisos(data);
            } catch (error) {
                console.log("Error al cargar permisos", error);
            }
        };
        fetchPermisos();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleCheck = (e) => {
        const { checked, value } = e.target;

        setFormData((prev) => {
            let nuevosPermisos = checked
            ? [...prev.permisos, value]
            : prev.permisos.filter((p) => p !== value);

            if (checked) {
                // Buscar el permiso seleccionado y obtener su padre (si lo tiene)
                const permisoSeleccionado = permisos.find(p => p.id.toString() === value);

                if (permisoSeleccionado && permisoSeleccionado.comoHijo.length > 0) {
                    permisoSeleccionado.comoHijo.forEach((padre) => {
                    const idPadreStr = padre.id_padre.toString();
                    if (!nuevosPermisos.includes(idPadreStr)) {
                        nuevosPermisos.push(idPadreStr);
                    }
                    });
                }
            }

            return {
            ...prev,
            permisos: nuevosPermisos,
            };
        });
    };


    return (
        <PosicionBase
            formData = {formData}
            handleChange = {handleChange}
            setOpen = {setOpen}
            handleSubmit = {handleSubmit}
            permisos = {permisos}
            handleCheck={handleCheck}
        />
    );
    

}