import { useEffect, useState } from "react";
import UbicacionesPage from "../components/pages/Ubicaciones";
import * as sentences from "../services/fetch/sentenciasFetch"

export default function Ubicaciones(){

    const [nombre, setNombre] = useState("")
    
    const [dataTable, setDataTable] = useState([]);
    
    const handleInputChange = (e) => {
       setNombre(e.target.value);
    }
    
    const handleAgregar = (item) => {
    
    }
    
    useEffect(() => {
        const getLocationData = async () => {
            try{
                const locationdata = await sentences.getAllData("ubicacion");
                if(!locationdata.mensaje){
                    setDataTable(locationdata);
                }
            }catch (error) {
                console.log("Error al obtener data de empleados:", error);
            }
        };
        
        getLocationData();
        
    }, [])
        
    const onSeleccionar = (item) => {
        
    }
    
    return(
        <UbicacionesPage
            busqueda= {nombre}
            handleInputChange = {handleInputChange}
            handleAgregar={handleAgregar}
            dataTable = {dataTable}
            onSeleccionar = {onSeleccionar}
        />
    );
}