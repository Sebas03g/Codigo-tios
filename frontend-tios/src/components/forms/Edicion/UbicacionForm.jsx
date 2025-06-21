import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import UbicacionBase from "../Base/UbicacionBase.jsx";

export default function UbicacionForm({ onClose, data }) {
  const [formData, setFormData] = useState({
    nombre: data.nombre,
    descripcion: data.descripcion,
    id_punto: data.id_punto,
  });

  const [punto, setPunto] = useState({
    lat: -0.22985,
    lng: -78.52495,
  });

  useEffect(() => {
    const fetchPunto = async () => {
      try {
        const punto = await sentences.getDataById("punto", formData.id_punto);
        setPunto({
          lat: punto.lat,
          lng: punto.lng,
        });
      } catch (error) {
        console.log("Error al obtener punto:", error);
      }
    };
    if (formData.id_punto) {
      fetchPunto();
    }
  }, [formData.id_punto]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <UbicacionBase
      formData={formData}
      punto={punto}
      setPunto={setPunto}
      onClose={onClose}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
