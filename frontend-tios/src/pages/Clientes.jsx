import { useEffect, useState } from "react";
import PersonasPage from "../components/pages/Personas";
import * as sentences from "../services/fetch/sentenciasFetch"

export default function Clientes(){
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
                    setDataTable(personasData);
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
            tipo = "Clientes"
            nombre= {formData.nombre}
            ruc = {formData.ruc}
            handleInputChange = {handleInputChange}
            handleAgregar={handleAgregar}
            dataTable = {dataTable}
            onSeleccionar = {onSeleccionar}
        />
    );
}