import { useEffect, useState } from "react";
import UbicacionesPage from "../components/pages/Ubicaciones";
import * as sentences from "../services/fetch/sentenciasFetch"
import { toast } from 'react-toastify';

export default function Ubicaciones(){

    const [nombre, setNombre] = useState("")

    const [formData, setFormData] = useState({
        nombre: "",
        descripcion: "",
    });

    const [punto, setPunto] = useState({
        lat: -0.22985,
        lng: -78.52495
    });
    
    const [dataTable, setDataTable] = useState([]);
    const [open, setOpen] = useState(false);
    
    const handleInputChange = (e) => {
       setNombre(e.target.value);
    }
    
    const handleAgregar = (item) => {
    
    }

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
    
    useEffect(() => {
        getLocationData();
        
    }, [])
        
    const onSeleccionar = (item) => {
        
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const createForm = {
            nombre: formData.nombre,
            descripcion: formData.descripcion,
            lat: punto.lat,
            lng: punto.lng
        }

        try {
            await sentences.createData("ubicacion", createForm);
            toast.success("Ubicacion creada de forma existosa.")
            await getLocationData();
            setOpen(false);
            setFormData({ nombre: "", descripcion: "" });
            setPunto({ lat: -0.22985, lng: -78.52495 });
        } catch (error) {
            console.error("Error al crear cliente:", error);
        }
    }

    return(
        <UbicacionesPage
            busqueda= {nombre}
            handleInputChange = {handleInputChange}
            dataTable = {dataTable}
            onSeleccionar = {onSeleccionar}
            open={open}
            setOpen={setOpen}
            handleSubmit = {handleSubmit}
            paramsFormData={{formData, setFormData, punto, setPunto}}
        />
    );
}