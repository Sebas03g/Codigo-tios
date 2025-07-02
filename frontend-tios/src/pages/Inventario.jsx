import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch";
import InventarioPage from "../components/pages/Inventario";

export default function Inventario() {
  const [inputData, setInputData] = useState({
    nombre: "",
    codigo: ""
  });

  const estadosNavBar = ["Inventario", "Herramientas"];
  const [estadoNavBar, setEstadoNavBar] = useState("Inventario");
  const [dataTable, setDataTable] = useState([]);

  const handleAgregar = () => {};

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value
    });
  };

  const getPrecioUnidad = (inventario) => {
    let maxPrecio = 0;
    for (const elemento of inventario) {
      const precioUnidad = elemento.precio - (elemento.precio * elemento.descuento);
      if (precioUnidad > maxPrecio) {
        maxPrecio = precioUnidad;
      }
    }
    return maxPrecio;
  };

  const obtenerCategoriaPorTipo = async (tipo) => {
    const data = await sentences.allExtraData("categoria", "inventario");
    return data.filter(c => c.tipo === tipo);
    };

  const inventarioTable = async (categoriaData) => {
    try {
      const tableData = categoriaData.map((categoria) => ({
        id: categoria.id,
        codigo: categoria.codigo,
        descripcion: categoria.descripcion,
        nombre: categoria.nombre,
        cantidad: categoria.inventario.length,
        tipo_unidad: categoria.tipo_unidad,
        precio_unidad: getPrecioUnidad(categoria.inventario)
      }));

      setDataTable(tableData);
    } catch (error) {
      console.log("Error al obtener data de inventario:", error);
    }
  };

  const herramientaTable = async (categoriaData) => {
    try {

      const tableData = categoriaData.map((categoria) => ({
        id: categoria.id,
        codigo: categoria.codigo,
        nombre: categoria.nombre,
        estado: categoria.estado,
        mantenimiento: categoria.tiempo ? "SI": "No",
        precio_unidad: getPrecioUnidad(categoria.inventario),
        tiempo: categoria.tiempo || "No Aplica"
      }));

      setDataTable(tableData);
    } catch (error) {
      console.log("Error al obtener data de inventario:", error);
    }
  };

  const getDataTable = async () => {
    const categoriaData = await obtenerCategoriaPorTipo(estadoNavBar);

    if (estadoNavBar === "Inventario") {
      await inventarioTable(categoriaData);
    } else {
      await herramientaTable(categoriaData);
    }
  };

  const onSeleccionar = async () => {
    // lógica futura
  };

  useEffect(() => {
    getDataTable();
  }, [estadoNavBar]);

  return (
    <InventarioPage
      paramsPage={{ handleAgregar, handleInputChange }}
      paramsNavBar={{ estadosNavBar, setEstadoNavBar, estadoNavBar }}
      paramsTable={{ dataTable, onSeleccionar }}
      paramsGenerales={{ codigo: inputData.codigo, nombre: inputData.nombre }}
    />
  );
}
