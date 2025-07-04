import { useState } from "react";
import RealizarCompra from "../components/pages/RealizarCompra";
import NavigationBar from "../components/general/navbar";
import HistorialCompras from "../components/pages/HistorialCompras";

export default function Compras(){

    const estadosNavBar = ["Compra", "Historial"]
    const [estadoNavBar, setEstadoNavBar] = useState("Compra");

    return (
        <>
            <NavigationBar
                paramsNavBar = {{estadosNavBar, estadoNavBar, setEstadoNavBar}}
            />
            {estadoNavBar === "Compra" ? 
                (<RealizarCompra/>)
            : 
                (<HistorialCompras/>)
            }
            
        </>
        
    );
}