import { useState } from "react";

import VentaPage from "./Venta";

export default function RealizarVenta(){

        const [tableData, setTableData] = useState([]);
        const [fecha, setFecha] = useState("");
        const [cliente, setCliente] = useState(null);
        const [porcentaje, setPorcentaje] = useState(0);
    
        const handleAgregarElemento = () => {
    
            
        };
    
        const agregarElementoTabla = (item) => {
            const total = parseFloat(item.precio_unidad) * parseFloat(item.cantidad);
            const cantidad_maxima = 10;
            const nuevoElemento = {
                id: item.id,
                codigo: item.codigo,
                nombre: item.nombre,
                tipo_unidad: item.tipo_unidad,
                precio_unidad: item.precio_unida,
                cantidad: item.cantidad,
                cantidad_maxima: cantidad_maxima,
                total: total
            }
    
            setTableData([...tableData, nuevoElemento]);
        };
    
        const handleCliente = () => {
            
        }
    
        const onSeleccionar = () => {
    
        }
    
        const setCantidad = (cantidad, item) => {
            const total = cantidad * item.precio_unidad;
            const nuevosElemento = tableData.map(data =>
                data.id === item.id ? { ...data, cantidad: cantidad, total: total } : item
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
    
        const handleVenta = () => {
    
        }
    
        return (
            <VentaPage
                handleCliente={handleCliente}
                porcentaje={porcentaje}
                setPorcentaje={setPorcentaje}
                fecha={fecha}
                setFecha={setFecha}
                handleAgregarElemento={handleAgregarElemento}
                tableData={tableData}
                onSeleccionar={onSeleccionar}
                setCantidad={setCantidad}
                cliente={cliente}
                setPrecioUnidad={setPrecioUnidad}
                handleVenta={handleVenta}
            />
        );
}