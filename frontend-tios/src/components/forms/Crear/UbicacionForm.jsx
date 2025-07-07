import { useState } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import UbicacionBase from "../Base/UbicacionBase.jsx";

export default function UbicacionForm({setOpen, handleSubmit, paramsFormData}){
    const {formData, setFormData, punto, setPunto} = paramsFormData;

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