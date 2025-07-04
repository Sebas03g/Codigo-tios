import { useState, useEffect } from "react";
import { PERMISOS } from "../../../constants/permissions.js";
import * as sentences from "../../../services/fetch/sentenciasFetch.js"
import PosicionBase from "../Base/PosicionBase.jsx";

export default function PosicionForm({setOpen, handleSubmit}){
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