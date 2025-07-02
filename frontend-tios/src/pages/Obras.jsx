import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch";
import ObrasPage from "../components/pages/Obras";

export default function Obras(){
    const [inputData, setInputData] = useState({
        nombre: ""
    });

    const [estadoObra, setEstadoObra] = useState("ACTIVO");

    const [dataObras, setDataObras] = useState([]);

    const handleEstadoObra = (e) => {
        setEstadoObra(e.target.value);
    }

    const handlePropuesta = (e) => {

    }

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }

    const getDataObras = async() => {
        try{
            const data = await sentences.getAllData("obra");
            setDataObras(data);
        }catch (error) {
            console.log("Error al obtener data de obras:", error);
        }
    }

    const onSeleccion = (item) => {
        
    }

    return(
        <ObrasPage
            data={dataObras}
            onSeleccion={onSeleccion}
            handleEstadoObra={handleEstadoObra}
            handlePropuesta={handlePropuesta}
            estadoObra={estadoObra}
            nombre={inputData.nombre}
            handleInputChange={handleInputChange}
        />)
    ;
}