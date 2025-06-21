import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import EmpleadoBase from "../Base/EmpleadoBase.jsx";

export default function EmpleadoForm({onClose, data}) {
  const [formData, setFormData] = useState({
    nombre: data.nombre,
    cedula: data.cedula,
    mail: data.mail,
    telefono: data.telefono,
    id_posicion: data.id_posicion,
    sueldo: data.sueldo,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sentences.createData("empleado", formData);
      alert("Empleado creado exitosamente");
    } catch (error) {
      console.error("Error al crear empleado:", error);
    }
  };

  return (
    <EmpleadoBase
      formData={formData}
      handleChange={handleChange}
      posiciones={posiciones}
      handleSubmit={handleSubmit}
    />
  );
}
