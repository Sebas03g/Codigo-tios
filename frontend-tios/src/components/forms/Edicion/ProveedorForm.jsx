import PersonaBase from "../Base/PersonaBase.jsx";
import * as sentences from "../../../services/fetch/sentenciasFetch.jd";
import { useState } from "react";

export default function ProveedorForm({ onClose, data }) {
  const [formData, setFormData] = useState({
    nombre: data.nombre,
    ruc: data.ruc,
    mail: data.mail,
    telefono: data.telefono
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sentences.createData("persona", formData);
      onClose();
    } catch (error) {
      console.error("Error al crear Proveedor:", error);
    }
  };

  return (
    <PersonaBase
      titulo="Proveedor"
      tipo="RUC/Cédula"
      handleSubmit={handleSubmit}
      onClose={onClose}
      formData={formData}
      handleChange={handleChange}
    />
  );
}
