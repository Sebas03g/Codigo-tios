import { useState } from "react";

export default function SeleccionPersona({setClose, handleSubmit, tipo}){
    const [formData, setFormData] = useState({
        nombre:"",
        ruc:"",
        mail:"",
        telefono:"",
        proveedor:tipo=="proveedor",
    })
}