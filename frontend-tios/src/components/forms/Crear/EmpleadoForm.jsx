import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import EmpleadoBase from "../Base/EmpleadoBase.jsx";

export default function EmpleadoForm({setOpen, handleSubmit}) {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: "",
    mail: "",
    telefono: "",
    id_posicion: "",
    sueldo: "",
  });

  const [posiciones, setPosiciones] = useState([]);

  useEffect(() => {
    const fetchPosiciones = async () => {
      try {
        const data = await sentences.getAllData("posicion");
        setPosiciones(data);
      } catch (error) {
        console.error("Error al cargar posiciones", error);
      }
    };
    fetchPosiciones();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <EmpleadoBase
      formData={formData}
      handleChange={handleChange}
      posiciones={posiciones}
      handleSubmit={handleSubmit}
      setOpen={setOpen}
    />
  );
}
