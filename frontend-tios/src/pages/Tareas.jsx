import TareasPage from "../components/pages/Tareas";
import * as sentences from "../services/fetch/sentenciasFetch"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { getTokenData } from "../services/getLocalStorageData";

export default function Tareas(){

    const [inputData, setInputData] = useState({
        asignador: "",
        asignado: "",
        nombre: ""
    })

    const id_usuario = getTokenData()?.id;

    const [estado, setEstado] = useState("TODOS")
    const [dataTable, setDataTable] = useState([])
    const [open, setOpen] = useState(false);

    const estadosNavBar = ["Propios", "General"];
    const [estadoNavBar, setEstadoNavBar] = useState("General");

    const getDataTable = async() => {
        try{
            const dataTareas = await sentences.allDataAllRelations("tarea", ["asignador", "asignado"])

            let filteredTareas = [];

            if(estadoNavBar === "General"){
                filteredTareas = dataTareas;
            }else{
                filteredTareas = dataTareas.filter((elemento) => elemento.id_asignado === id_usuario);
            }

            let fixedData = await Promise.all(
                filteredTareas.map(async (tarea) => {
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
    }, [estadoNavBar]);

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

    const handleSubmit = async (e, formDataState) => {
        e.preventDefault();

        if (!(formDataState.fecha_final instanceof Date) || isNaN(formDataState.fecha_final)) {
            toast.error("Selecciona una fecha válida");
            return;
        }

        if (!formDataState.id_ubicacion && !formDataState.id_obra) {
            toast.error("Debes seleccionar al menos una ubicación o una obra");
            return;
        }

        const createForm = {
            nombre: formDataState.nombre,
            descripcion: formDataState.descripcion,
            fecha_final: formDataState.fecha_final.toISOString(),
            id_asignador: 1,
            id_asignado: parseInt(formDataState.id_asignado),
            id_ubicacion: formDataState.id_ubicacion ? parseInt(formDataState.id_ubicacion) : null,
            id_obra: formDataState.id_obra ? parseInt(formDataState.id_obra) : null,
            createdBy: 1
        };

        try {
            await sentences.createData("tarea", createForm);
            toast.success("Tarea creada exitosamente");
            getDataTable();
            setOpen(false);
        } catch (error) {
            console.error("Error al crear tarea:", error);
        }
    };

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
            paramsNavBar = {{ estadosNavBar, setEstadoNavBar, estadoNavBar }}
        />
    );
}