import { useEffect, useState } from "react";
import PersonasPage from "../components/pages/Personas";
import * as sentences from "../services/fetch/sentenciasFetch"
import { toast } from 'react-toastify';

export default function Clientes(){
    const [formData, setFormData] = useState({
        nombre: "",
        ruc: ""
    })

    const [dataTable, setDataTable] = useState([]);
    const [open, setOpen] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
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

    useEffect(() => {
        
        getProviderData();
    
    }, [])
    
    const onSeleccionar = (item) => {
    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;

        const createForm = {
            nombre: form.nombre.value,
            ruc: form.ruc.value,
            mail: form.mail.value,
            telefono: form.telefono.value,
            proveedor: false
        }

        try {
            await sentences.createData("persona", createForm);
            toast.success("Cliente creado de forma existosa.")
            await getProviderData();
            setOpen(false);
        } catch (error) {
            console.error("Error al crear cliente:", error);
            toast.error("Validar que los datos de RUC y Mail sean unicos.");
        }
    };

    return(
        <PersonasPage
            tipo = "Clientes"
            nombre= {formData.nombre}
            ruc = {formData.ruc}
            handleInputChange = {handleInputChange}
            handleSubmit={handleSubmit}
            dataTable = {dataTable}
            onSeleccionar = {onSeleccionar}
            open={open}
            setOpen={setOpen}
        />
    );
}