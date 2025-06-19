import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";

export default function CategoriaForm({onClose, tipo}){
    const [formData, setFormData] = useState({
        nombre: "",
        codigo: "",
        descripcion: "",
        tipo_unidad: "",
        venta: true,
        tiempo: ""
    });
}