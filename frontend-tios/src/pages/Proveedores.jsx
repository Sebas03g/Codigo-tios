import { useEffect, useState } from "react";
import PersonasPage from "../components/pages/Personas";
import * as sentences from "../services/fetch/sentenciasFetch"

export default function Proveedores(){
    const [formData, setFormData] = useState({
        nombre: "",
        ruc: ""
    })

    const [dataTable, setDataTable] = useState([]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleAgregar = (item) => {

    }

    useEffect(() => {
        const getProviderData = async () => {
            try{
                const personasData = await sentences.getAllData("persona");
                if(!personasData.mensaje){
                    const proveedorData = personasData.filter(empleado => empleado.proveedor);
                    setDataTable(proveedorData);
                }
            }catch (error) {
                console.log("Error al obtener data de empleados:", error);
            }
        };
    
        getProviderData();
    
    }, [])
    
    const onSeleccionar = (item) => {
    
    }

    return(
        <PersonasPage
            tipo = "Proveedores"
            nombre= {formData.nombre}
            ruc = {formData.ruc}
            handleInputChange = {handleInputChange}
            handleAgregar={handleAgregar}
            dataTable = {dataTable}
            onSeleccionar = {onSeleccionar}
        />
    );
}