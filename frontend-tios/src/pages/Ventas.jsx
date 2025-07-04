import { useState } from "react";
import RealizarVenta from "../components/pages/RealizarVenta";
import NavigationBar from "../components/general/navbar";
import HistorialVentas from "../components/pages/HistorialVentas";

export default function Ventas(){
    const estadosNavBar = ["Venta", "Historial"]
        const [estadoNavBar, setEstadoNavBar] = useState("Venta");
    
        return (
            <>
                <NavigationBar
                    paramsNavBar = {{estadosNavBar, estadoNavBar, setEstadoNavBar}}
                />
                {estadoNavBar === "Venta" ? 
                    (<RealizarVenta/>)
                : 
                    (<HistorialVentas/>)
                }
                
            </>
            
        );
}