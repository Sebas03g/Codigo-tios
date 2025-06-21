import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";
import CategoriaBase from "../Base/CategoriaBase.jsx";

export default function CategoriaForm({ onClose, tipo, data }) {
  const [formData, setFormData] = useState({
    nombre: data?.nombre || "",
    codigo: data?.codigo || "",
    descripcion: data?.descripcion || "",
    tipo: data?.tipo || tipo,
    tipo_unidad: data?.tipo_unidad || "",
    venta: data?.venta ?? true,
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

    let tiempoCalculado = null;
    if (mantenimiento) {
      const hoy = new Date();
      tiempoCalculado = new Date(hoy);
      tiempoCalculado.setFullYear(
        tiempoCalculado.getFullYear() + tiempoData.anios
      );
      tiempoCalculado.setMonth(
        tiempoCalculado.getMonth() + tiempoData.meses
      );
      tiempoCalculado.setDate(tiempoCalculado.getDate() + tiempoData.dias);
    }

    const dataParaEnviar = {
      ...formData,
      ...(mantenimiento && { tiempo: tiempoCalculado.toISOString() }),
    };

    try {
      await sentences.updateData("categoria", data.id, dataParaEnviar);
      onClose();
    } catch (error) {
      console.error("Error al guardar la categoría:", error);
    }
  };

  useEffect(() => {
    const obtenerTiempo = () => {
      if (!data?.tiempo) return;

      const hoy = new Date();
      const tiempo = new Date(data.tiempo);

      const years = differenceInYears(tiempo, hoy);
      const dateWithYears = addYears(hoy, years);
      const months = differenceInMonths(tiempo, dateWithYears);
      const dateWithMonths = addMonths(dateWithYears, months);
      const days = differenceInDays(tiempo, dateWithMonths);

      setTiempoData({
        dias: days,
        meses: months,
        anios: years,
      });

      setMantenimiento(true);
    };

    obtenerTiempo();
    setFormData((prev) => ({ ...prev, tipo }));
  }, [tipo, data?.tiempo]);

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
