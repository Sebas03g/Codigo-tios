import { useEffect, useState } from "react";
import * as sentences from "../../../../services/fetch/sentenciasFetch";
import SeleccionPersonaDesign from "../Diseño/SeleccionPersona";

export default function SeleccionPersona({setOpen, handleSubmit, tipo}){
    const [formData, setFormData] = useState({
        nombre:"",
        ruc:"",
        mail:"",
        telefono:""
    })

    const [dataProveedores, setDataProveedores] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log(name);
        console.log(value);
        console.log(dataProveedores);

        if (name === "ruc") {
            const prov = dataProveedores.find(proveedor => proveedor.ruc === value);

            if (prov) {
                return setFormData({
                    ...formData,
                    ruc: prov.ruc,
                    nombre: prov.nombre,
                    telefono: prov.telefono,
                    mail: prov.mail,
                });
            }
        }
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const getData = async() => {
        try{
            const dataProveedor = await sentences.getAllData("persona");
            setDataProveedores(dataProveedor?.mensaje ? [] : dataProveedor);
    
        }catch (error) {
            console.log("Error al obtener data de elemento de compra:", error);
        }
    }

    useEffect(() => {
        getData();
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