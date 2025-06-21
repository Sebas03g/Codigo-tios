import { useState, useEffect } from "react";
import * as sentences from "../../../services/fetch/sentenciasFetch.js";
import TablaProveedores from "../TablaProveedores.jsx"; // Asegúrate que el nombre del archivo sea correcto

export default function ElementoForm({ onClose, tipo, categoria }) {
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

    fetchProveedores();
  }, [categoria]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 shadow rounded relative">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-2 right-2 text-red-500 font-bold"
      >
        ✖
      </button>

      <h2 className="text-xl font-bold mb-4">Crear Elemento</h2>

      <div className="grid gap-4">
        <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            name="nombre"
            value={proveedorData.nombre}
            onChange={handleChangeProveedor}
            className="border p-2 w-full"
            required
          />
        

        <label htmlFor="ruc">RUC</label>
          <input
            type="text"
            name="ruc"
            value={proveedorData.ruc}
            onChange={handleChangeProveedor}
            className="border p-2 w-full"
            required
          />
        

        <label htmlFor="mail">Correo</label>
          <input
            type="email"
            name="mail"
            value={proveedorData.mail}
            onChange={handleChangeProveedor}
            className="border p-2 w-full"
          />
        

        <label htmlFor="telefono">Teléfono</label>          
          <input
            type="tel"
            name="telefono"
            value={proveedorData.telefono}
            onChange={handleChangeProveedor}
            className="border p-2 w-full"
          />
       

        <label htmlFor="precio">Precio</label>         
          <input
            type="number"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            step="0.01"
            className="border p-2 w-full"
            required
          />
        

        <label htmlFor="descuento">Descuento</label>
          <input
            type="number"
            name="descuento"
            value={formData.descuento}
            onChange={handleChange}
            step="0.01"
            className="border p-2 w-full"
          />
        

        {herramienta && (
            <div>
                <label htmlFor="cantidad">Cantidad</label>
                    <input
                        type="number"
                        name="cantidad"
                        value={formData.cantidad}
                        onChange={handleChange}
                        step="0.01"
                        className="border p-2 w-full"
                    /> 

            </div>
        )}

      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Proveedores sugeridos</h3>
        <TablaProveedores datos={diccionario} onSeleccionar={handleSeleccionProveedor} />
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
        Guardar
      </button>
    </form>
  );
}
