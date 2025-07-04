import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import TablaProveedores from "../TablaProveedores.jsx"; // Asegúrate que el nombre del archivo sea correcto
import ElementoBase from "../Base/ElementoBase.jsx";

export default function ElementoForm({ setOpen, tipo, categoria }) {
  const [formData, setFormData] = useState({
    precio: 0.0,
    descuento: 0.0,
    id_categoria: categoria,
    id_ubicacion: 0,
    id_proveedor: 0,
    cantidad: 0,
  });

  const [proveedorData, setProveedorData] = useState({
    nombre: "",
    ruc: "",
    mail: "",
    telefono: "",
  });

  const [ubicacionesData, setUbicacionesData] = useState([]);

  const [ubicacionId, setUbicacionId] = useState(0);

  const [diccionario, setDiccionario] = useState([]);

  const herramienta = tipo === "herramienta";

  useEffect(() => {
    const fetchProveedores = async () => {
      try {
        const data = await sentences.extraData("categoria", categoria, "inventario");
        let nuevosDatos = [];

        for (const elemento of data) {
          const proveedor = await sentences.getDataById("persona", elemento.id_proveedor);
          const transacciones = await sentences.extraData("inventario", elemento.id, "transaccion");

          for (const transaccion of transacciones) {
            const trans = await sentences.getDataById("transaccion", transaccion.id_transaccion);

            if (trans.compra) {
              const datos = {
                id: elemento.id,
                precio: parseFloat(elemento.precio),
                cantidad: transaccion.cantidad,
                ruc_proveedor: proveedor.ruc,
                nombre_proveedor: proveedor.nombre,
                proveedor,
              };
              nuevosDatos.push(datos);
              break;
            }
          }
        }

        nuevosDatos.sort((a, b) => a.precio - b.precio);
        setDiccionario(nuevosDatos);
      } catch (error) {
        console.log("Error al obtener proveedores:", error);
      }
    };

    const fetchUbicaciones = async () => {
      const ubicaciones = await sentences.getAllData("ubicacion");
      setUbicacionesData(ubicaciones);
    }

    fetchProveedores();
    fetchUbicaciones();
  }, [categoria]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeUbicacion = async (e) => {
    setUbicacionId(e.target.value);
  }

  const handleChangeProveedor = async (e) => {
    const { name, value } = e.target;

    setProveedorData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "ruc" && value.length >= 4) {
      try {
        const proveedores = await sentences.getAllData("persona");
        const proveedor = proveedores.find((p) => p.ruc === value);
        if (proveedor) {
          setProveedorData({
            ruc: proveedor.ruc,
            nombre: proveedor.nombre,
            mail: proveedor.mail || "",
            telefono: proveedor.telefono || "",
          });

          setFormData((prev) => ({
            ...prev,
            id_proveedor: proveedor.id,
          }));
        }
      } catch (error) {
        console.error("Error buscando proveedor:", error);
      }
    }
  };

  const handleSeleccionProveedor = (item) => {
    setProveedorData({
      nombre: item.nombre_proveedor,
      ruc: item.ruc_proveedor,
      mail: item.proveedor.mail || "",
      telefono: item.proveedor.telefono || "",
    });

    setFormData((prev) => ({
      ...prev,
      precio: item.precio,
      id_proveedor: item.proveedor.id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataParaEnviar = {
        precio: formData.precio,
        descuento: formData.descuento,
        id_categoria: formData.id_categoria,
        id_ubicacion: formData.id_ubicacion,
        id_proveedor: formData.id_proveedor,
        ...(tipo === "herramienta" && { cantidad: formData.cantidad })
    };
    
  };

  return (
    <ElementoBase
      setOpen={setOpen}
      handleSubmit={handleSubmit} 
      proveedorData={proveedorData}
      handleChange={handleChange}
      handleChangeProveedor={handleChangeProveedor}
      formData={formData}
      diccionario={diccionario}
      handleSeleccionProveedor={handleSeleccionProveedor}
      ubicacionId={ubicacionId}
      handleChangeUbicacion={handleChangeUbicacion}
      ubicacionesData={ubicacionesData}
      herramienta={herramienta}
    />
  );
}
