import ProformasPage from "../components/pages/Proformas";
import { useState, useEffect } from "react";
import { obtenerTotalInventario, obtenerTotalEmpleados, obtenerTotalHerramientas } from "../services/ObtenerTotales";
import * as sentences from "../services/fetch/sentenciasFetch"

export default function Proformas(){

    const [inputData, setInputData] = useState({
        nombre: "",
        cliente: "",
    });

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    const [tableData, setTableData] = useState([]);

    const handleAgregar = () => {

    }

    const onSeleccionar = (item) => {

    }

    const getDataProformas = async() => {
        try{
            const data = await sentences.allDataAllRelations("proforma", ["empleados", "herramientas", "inventario", "cliente"])


            const dataTable = data.map((proforma) => (
                {
                    id: proforma.id,
                    nombre: proforma.nombre,
                    cliente: proforma.cliente.nombre,
                    porcentaje_venta: proforma.porcentaje_venta,
                    tiempo_esperado:proforma.tiempo_esperado,
                    total: obtenerTotalEmpleados(proforma.empleados) + obtenerTotalHerramientas(proforma.herramientas) + obtenerTotalInventario(proforma.inventario)
                }
        ));

            setTableData(dataTable);

        } catch (error) {
            console.log("Error al obtener data de proformas:", error);
        }
    }

    useEffect(() => {
        getDataProformas();
    },[])

    return(
        <ProformasPage
            nombre={inputData.nombre}
            cliente={inputData.cliente}
            handleInputChange={handleInputChange}
            handleAgregar={handleAgregar}
            dataTable={tableData}
            onSeleccionar={onSeleccionar}
        />
    );
}