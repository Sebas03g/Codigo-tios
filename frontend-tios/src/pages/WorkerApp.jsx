import { useEffect, useState } from "react";
import { MapContainer } from "react-leaflet";
import * as sentences from "../services/fetch/sentenciasFetch.js"
import { getTokenData } from "../services/getLocalStorageData.js";

export default function WorkerApp(){

    const [empleado, setEmpleado] = useState();

    const [tareas, setTareas] = useState([]);

    const id = getTokenData()?.id;

    useEffect(() => {

        const fetchInformacion = async () => {
            try {
                const usuario = await sentences.getDataById("empleado",id);
                setEmpleado(usuario);

                const tasks = await sentences.extraData("empleado", id, "tareasRecibidas");
                setTareas(tasks);
            } catch (error) {
                console.log("Error al obtener la informacion:", error);
            }
        }


        fetchInformacion()
    }, []);


    return(
       // <WorkerAppPage />
       <p>Hola</p>
    );
}