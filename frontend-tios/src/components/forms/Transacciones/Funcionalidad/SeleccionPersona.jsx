import { useEffect, useState } from "react";
import * as sentences from "../../../../services/fetch/sentenciasFetch"
import SeleccionPersonaDesign from "../Diseño/SeleccionPersona"

export default function SeleccionPersona({setOpen, handleSubmit, tipo}){
    const [formData, setFormData] = useState({
        nombre:"",
        ruc:"",
        mail:"",
        telefono:"",
        proveedor:tipo=="proveedor",
    })

    const [dataProveedores, setDataProveedores] = useState([]);
    
    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        if(name==="ruc"){
            const prov = dataProveedores.find(proveedor => proveedor.ruc === value);

            if(prov){
                setFormData({
                    ...formData,
                    ruc: prov.ruc,
                    nombre: prov.nombre,
                    telefono: prov.telefono,
                    mail: prov.mail,
                });
            }
        }else{
            setFormData({
                ...formData,
                [name]:value
            })
        }    
    }

    const getAllData = async() => {
        try{
            const data = await sentences.getAllData("persona");
            setDataProveedores(data);
        }catch (error) {
            console.log("Error al obtener data de elemento de compra:", error);
        }

    }

    useEffect(() => {
        getAllData();
    }, []);

    return(
        <SeleccionPersonaDesign
            setOpen={setOpen}
            handleSubmit={(e) => handleSubmit(e,formData)}
            formData={formData}
            handleChange={handleChange}
             tipo={tipo}
        />
    );
}