import PersonaForm from "./PersonaForm";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import { useState } from "react";

export default function ClienteForm({ onClose }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sentences.createData("persona", formData);
      onClose();
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };

  return (
    <PersonaForm
      titulo="Cliente"
      tipo="RUC/Cédula"
      handleSubmit={handleSubmit}
      onClose={onClose}
      formData={formData}
      handleChange={handleChange}
    />
  );
}
