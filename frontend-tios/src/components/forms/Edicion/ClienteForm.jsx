import PersonaBase from "../Base/PersonaBase.jsx";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { useState } from "react";

export default function ClienteForm({ onClose, data }) {
  const [formData, setFormData] = useState({
    nombre: data.nombre,
    ruc: ruc,
    mail: mail,
    telefono: telefono
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <PersonaBase
      titulo="Cliente"
      tipo="RUC/Cédula"
      handleSubmit={handleSubmit}
      onClose={onClose}
      formData={formData}
      handleChange={handleChange}
    />
  );
}
