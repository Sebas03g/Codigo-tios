import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import CategoriaBase from "../Base/CategoriaBase.jsx";

export default function CategoriaForm({ setOpen, tipo, handleSubmit }) {
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

  useEffect(() => {
    setFormData((prev) => ({ ...prev, tipo }));
  }, [tipo]);

  return (
    <CategoriaBase
      formData={formData}
      handleSubmit={(e) => handleSubmit(e, tiempoData, mantenimiento)}
      setOpen={setOpen}
      handleChange={handleChange}
      handleMantenimiento={handleMantenimiento}
      mantenimiento={mantenimiento}
      tiempoData={tiempoData}
      handleTimeChange={handleTimeChange}
    />
  );
}
