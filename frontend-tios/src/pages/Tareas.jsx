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
    const [dataTable, setDataTable] = useState([])
    const [open, setOpen] = useState(false);

    const getDataTable = async() => {
        try{
            const dataTareas = await sentences.allDataAllRelations("tarea", ["asignador", "asignado"])
            const fixedData = await Promise.all(
                dataTareas.map(async (tarea) => {
                    return {
                        id:tarea.id,
                        nombre:tarea.nombre,
                        fecha_inicio:tarea.fecha_inicio,
                        fecha_final:tarea.fecha_final,
                        estado:tarea.estado,
                        asignador: tarea.asignador?.nombre || "—",
                        asignado: tarea.asignado?.nombre || false
                    };
                })
            );

            setDataTable(fixedData);

        }catch (error){
            console.log("Error al obtener data de tareas:", error);
        }
    }

    useEffect(() => {
        getDataTable()
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

    const handleSubmit = (e) => {
        e.preventDefault()
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
            dataTable={dataTable}
            onSeleccionar={onSeleccionar}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
        
        />
    );
}