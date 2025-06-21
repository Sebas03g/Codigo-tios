import { useState } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import UbicacionBase from "../Base/UbicacionBase.jsx";

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
        <UbicacionBase
            formData={formData}
            punto={punto}
            setPunto={setPunto}
            onClose={onClose}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}