import HistorialDevolucion from "../components/pages/HistorialDevolucion";
import ProcesoDevolucion from "../components/pages/ProcesoDevolucion";
import NavigationBar from "../components/general/navbar";
import { useState } from "react";

export default function Devoluciones(){
    const estadosNavBar = ["Proceso", "Historial"]
    const [estadoNavBar, setEstadoNavBar] = useState("Proceso");
    
    return (
        <>
            <NavigationBar
                paramsNavBar = {{estadosNavBar, estadoNavBar, setEstadoNavBar}}
            />
            {estadoNavBar === "Proceso" ? 
                (<ProcesoDevolucion/>)
            : 
                (<HistorialDevolucion/>)
            }
                
        </>
            
    );
}