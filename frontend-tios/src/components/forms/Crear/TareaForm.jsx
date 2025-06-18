import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";

export default function TareaForm({onClose}){
    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
        
    });
}