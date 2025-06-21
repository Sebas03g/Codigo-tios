import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import CategoriaBase from "../Base/CategoriaBase.jsx";

export default function CategoriaForm({ onClose, tipo }) {
  const [formData, setFormData] = useState({
    nombre: "",
    codigo: "",
    descripcion: "",
    tipo: tipo,
    tipo_unidad: "",
    venta: tipo === "herramienta",
  });

  const [mantenimiento, setMantenimiento] = useState(false);

  const [tiempoData, setTiempoData] = useState({
    dias: 0,
    meses: 0,
    anios: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTimeChange = (e) => {
    setTiempoData({
      ...tiempoData,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleMantenimiento = (e) => {
    setMantenimiento(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let tiempoCalculado = "";
    if (mantenimiento) {
        const hoy = new Date();
        tiempoCalculado = new Date(hoy);
        tiempoCalculado.setFullYear(tiempoCalculado.getFullYear() + tiempoData.anios);
        tiempoCalculado.setMonth(tiempoCalculado.getMonth() + tiempoData.meses);
        tiempoCalculado.setDate(tiempoCalculado.getDate() + tiempoData.dias);

        

    }

    const dataParaEnviar = {
        ...formData,
        ...(mantenimiento && { tiempo: tiempoCalculado.toISOString() })
    };

    
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tipo }));
  }, [tipo]);

  return (
    <CategoriaBase
      formData={formData}
      handleSubmit={handleSubmit}
      onClose={onClose}
      handleChange={handleChange}
      handleMantenimiento={handleMantenimiento}
      mantenimiento={mantenimiento}
      tiempoData={tiempoData}
      handleTimeChange={handleTimeChange}
    />
  );
}
