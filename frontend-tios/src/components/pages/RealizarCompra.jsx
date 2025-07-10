import { useState } from "react";
import CompraPage from "../pages/Compra";

export default function RealizarCompra(){

    const [tableData, setTableData] = useState([]);
    const [fecha, setFecha] = useState("");
    const [estadoCredito, setEstadoCredito] = useState(false);
    const [proveedor, setProveedor] = useState(null);
    const [inventario, setInventario] = useState([]);

    const [openProveedor, setOpenProveedor] = useState(false)
    const [openInventario, setOpenInventario] = useState(false)

    const handleAgregarElemento = (e, inventarioDato) => {
        e.preventDefault();
        setInventario([...inventario, inventarioDato]);
        agregarElementoTabla(inventarioDato);
        setOpenInventario(false);
    };

    const agregarElementoTabla = (item) => {
        const total = parseFloat(item.precio_unidad) * parseFloat(item.cantidad);

        const nuevoElemento = {
            id: item.id,
            codigo: item.codigo,
            nombre: item.nombre,
            tipo_unidad: item.tipo_unidad,
            precio_unidad: item.precio_unidad,
            cantidad: item.cantidad,
            total: total
        }

        setTableData([...tableData, nuevoElemento]);
    };

    const handleProveedor = (e, formProveedor) => {
        e.preventDefault();
        setProveedor({ ...formProveedor});
        setOpenProveedor(false);
    }

    const onSeleccionar = () => {

    }

    const setCantidad = (cantidad, item) => {
        const total = cantidad * item.precio_unidad;
        const nuevosElemento = tableData.map(data =>
            data.id === item.id
                ? { ...data, cantidad, total }
                : data
        );

        setTableData(nuevosElemento);
    }

    const setPrecioUnidad = (precio_unidad, item) => {
        const total = item.cantidad * precio_unidad;
        const nuevosElemento = tableData.map(data =>
            data.id === item.id ? { ...data, precio_unidad: precio_unidad, total: total } : item
        );
        setTableData(nuevosElemento);
    }

    const handleCompra = () => {

    }

    return (
        <CompraPage
            handleProveedor={handleProveedor}
            estadoCredito={estadoCredito}
            setEstadoCredito={setEstadoCredito}
            fecha={fecha}
            setFecha={setFecha}
            handleAgregarElemento={handleAgregarElemento}
            tableData={tableData}
            onSeleccionar={onSeleccionar}
            setCantidad={setCantidad}
            proveedor={proveedor}
            setPrecioUnidad={setPrecioUnidad}
            handleCompra={handleCompra}
            openProveedor={openProveedor}
            setOpenProveedor={setOpenProveedor}
            openInventario={openInventario}
            setOpenInventario={setOpenInventario}
        />
    );
}