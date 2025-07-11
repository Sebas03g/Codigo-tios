import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch";
import CategoriaPage from "../components/pages/Categoria";
import { useNavigate } from "react-router-dom";
import { crearCodigo } from "../services/baseFunctions";
import { toast } from 'react-toastify';

export default function Categoria() {
  const [inputData, setInputData] = useState({
    nombre: "",
    codigo: ""
  });

  const navigate = useNavigate();

  const estadosNavBar = ["Inventario", "Herramienta"];
  const [estadoNavBar, setEstadoNavBar] = useState("Inventario");
  const [dataTable, setDataTable] = useState([]);
  const [open, setOpen] = useState(false);

  const handleAgregar = () => {
    
    
  };

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
    const data = await sentences.allDataAllRelations("categoria", ["inventario"]);
    return data.filter(c => c.tipo === tipo);
  };

  const obtenerCantidad = (inventario) => {
    if(inventario.length == 0){
      return 0;
    }
    return inventario.reduce((acumulador, valor) => valor.cantidad + acumulador, 0);
  }

  const inventarioTable = async (categoriaData) => {
    try {
      const tableData = categoriaData.map((categoria) => ({
        id: categoria.id,
        codigo: categoria.codigo,
        descripcion: categoria.descripcion,
        nombre: categoria.nombre,
        cantidad: obtenerCantidad(categoria.inventario),
        tipo_unidad: categoria.tipo_unidad,
        precio_unidad: getPrecioUnidad(categoria.inventario),
        tipo: categoria.tipo
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
        descripcion: categoria.descripcion,
        tipo_unidad: categoria.tipo_unidad,
        mantenimiento: categoria.tiempo ? categoria.tiempo: null,
        precio_unidad: getPrecioUnidad(categoria.inventario),
        tiempo: categoria.tiempo || "No Aplica",
        tipo: categoria.tipo
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

  const onSeleccionar = async (item) => {
    navigate("/inventario", { state: { item } });
  };

  const handleSubmit = async (e, tiempoData, mantenimiento) => {
    e.preventDefault();
    const form = e.target;


    let tiempoCalculado = null;
    if (mantenimiento) {
      const hoy = new Date();
      tiempoCalculado = new Date(hoy);
      tiempoCalculado.setFullYear(hoy.getFullYear() + (tiempoData.anios || 0));
      tiempoCalculado.setMonth(hoy.getMonth() + (tiempoData.meses || 0));
      tiempoCalculado.setDate(hoy.getDate() + (tiempoData.dias || 0));
    }

    const createForm = {
      nombre: form.nombre.value,
      codigo: crearCodigo(dataTable, estadoNavBar),
      descripcion: form.descripcion.value,
      tipo: estadoNavBar,
      tipo_unidad: estadoNavBar === "Herramienta" ? "UND" : form.tipo_unidad?.value || "",
      tiempo: mantenimiento ? tiempoCalculado.toISOString() : null,
    };

    try {
      await sentences.createData("categoria", createForm);
      toast.success("Ubicación creada de forma exitosa.");
      await getDataTable();
      setOpen(false);
    } catch (error) {
      console.error("Error al crear cliente:", error);
    }
  };


  useEffect(() => {
    getDataTable();
  }, [estadoNavBar]);

  return (
    <CategoriaPage
      paramsPage={{ handleAgregar, handleInputChange }}
      paramsNavBar={{ estadosNavBar, setEstadoNavBar, estadoNavBar }}
      paramsTable={{ dataTable, onSeleccionar }}
      paramsGenerales={{ codigo: inputData.codigo, nombre: inputData.nombre }}
      open={open}
      setOpen={setOpen}
      handleSubmit={handleSubmit}
    />
  );
}
