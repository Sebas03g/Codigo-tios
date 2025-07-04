import { useState } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import UbicacionBase from "../Base/UbicacionBase.jsx";

export default function UbicacionForm({setOpen, handleSubmit}){
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
    
    return (
        <UbicacionBase
            formData={formData}
            punto={punto}
            setPunto={setPunto}
            setOpen={setOpen}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    );
}