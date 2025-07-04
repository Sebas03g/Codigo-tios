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
            console.log("Prueba 1")
            const data = await sentences.allDataAllRelations("proforma", ["procesos", "cliente"]);
            console.log("Prueba 2")
            const procesos = await sentences.allDataAllRelations("proceso", ["empleados", "herramientas", "inventario"]);
            console.log("Prueba 3")
            let dataTable = []

            for (const dato of data){
                const procesosFiltrados = procesos.filter((proceso) => {proceso.id_proforma == dato.id});

                const elementoTabla = {
                    id: dato.id,
                    nombre: dato.nombre,
                    cliente: dato.cliente.nombre,
                    porcentaje_venta: dato.porcentaje_venta,
                    tiempo_esperado:dato.tiempo_esperado,
                    total: obtenerTotalEmpleados(procesosFiltrados) + obtenerTotalHerramientas(procesosFiltrados) + obtenerTotalInventario(procesosFiltrados)
                }

                dataTable.push(elementoTabla);
            }

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