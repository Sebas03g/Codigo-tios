import TareasPage from "../components/pages/Tareas";
import * as sentences from "../services/fetch/sentenciasFetch"
import { useEffect, useState } from "react";

export default function Tareas(){

    const [inputData, setInputData] = useState({
        asignador: "",
        asignado: "",
        nombre: ""
    })

    const [estado, setEstado] = useState("TODOS")
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async() => {
            try{
                const dataAsignador = await sentences.allExtraData("tarea", "asignador");
                const dataAsignado = await sentences.allExtraData("tarea", "")
            }catch (error){
                console.log("Error al obtener data de tareas:", error);
            }
        }
        getData()
    }, []);

    const handleEstado = (e) => {
        setEstado(e.target.value);
    }

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value,
        });
    }

    const handleAgregar = () => {

    }

    const onSeleccionar = (item) => {

    }

    return(
        <TareasPage
            asignador={inputData.asignador}
            asignado={inputData.asignado}
            estado={estado}
            nombre={inputData.nombre}
            handleEstado={handleEstado}
            handleInputChange={handleInputChange}
            handleAgregar={handleAgregar}
            dataTable={data}
            onSeleccionar={onSeleccionar}
        
        />
    );
}