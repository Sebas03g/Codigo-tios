import { useEffect, useState } from "react";
import * as sentences from "../../../../services/fetch/sentenciasFetch"
import ElementoCompraDesign from "../Diseño/ElementoCompra";

export default function ElementoCompra({ setOpen, handleSubmit, categoria, tipo }){
    const [formData, setFormData] = useState({
        id_ubicacion: "",
        cantidad: 0.0,
        precio: 0.0,
        ruc: "",
        nombre: "",
        telefono: "",
        mail: "",
        estado: tipo=="Herramiento" ? "Nuevo" : null,
    })

    const [dataUbicaciones, setDataUbicaciones] = useState([]);
    const [dataProveedores, setDataProveedores] = useState([]);
    const [dataInventario, setDataInventario] = useState([]);

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

    const handleCheck = (item) => {
        setFormData({
            ...formData,
            ruc: item.ruc,
            nombre: item.nombre,
            telefono: item.telefono,
            mail: item.mail,
        })
    }

    const getData = async() => {
        try{
            const dataUbicacion = await sentences.getAllData("ubicacion");
            const dataProveedor = await sentences.getAllData("persona"); 
            const dataInventario = await sentences.allDataAllRelations("inventario", ["proveedor"]);

            const filteredInventarioData = dataInventario.filter((elemento) => elemento.id_categoria === categoria.id)

            filteredInventarioData.sort((a, b) => a.precio - b.precio);

            setDataUbicaciones(dataUbicacion?.mensaje ? [] : dataUbicacion);
            setDataProveedores(dataProveedor?.mensaje ? [] : dataProveedor);
            setDataInventario(filteredInventarioData);

        }catch (error) {
            console.log("Error al obtener data de elemento de compra:", error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return(
        <ElementoCompraDesign
            dataUbicaciones={dataUbicaciones}
            dataInventario={dataInventario}
            setOpen={setOpen}
            handleSubmit={(e) => handleSubmit(e,formData)}
            formData={formData}
            handleChange={handleChange}
            handleCheck={handleCheck}
            tipo={tipo}
        />
    );
}