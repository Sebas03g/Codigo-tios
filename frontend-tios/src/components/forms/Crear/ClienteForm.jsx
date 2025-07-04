import PersonaBase from "../Base/PersonaBase.jsx";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { useState } from "react";

export default function ClienteForm({ setOpen, handleSubmit }) {
  const [formData, setFormData] = useState({
    nombre: '',
    ruc: '',
    mail: '',
    telefono: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <PersonaBase
      titulo="Cliente"
      tipo="RUC/Cédula"
      handleSubmit={handleSubmit}
      setOpen={setOpen}
      formData={formData}
      handleChange={handleChange}
    />
  );
}
