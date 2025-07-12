import { useState, useEffect } from "react";
import * as sentences from "../../../../services/fetch/sentenciasFetch"
import AgregarElementoCompraDesign from "../Diseño/AgregarElementoCompra";

export default function AgregarElementoCompra({ setOpen, handleSelect, handleSubmit, dataCliente, handleCreate }){
    const [formData, setFormData] = useState({
        codigo: "",
        nombre_categoria: "",
        descripcion_categoria: "",
        tipo_categoria: "",
        tipo_unidad: "",
        cantidad: 0.0,
        precio: 0.0,
        tiempo: new Date()
    });

    const [inputData, setInputData] = useState({
        nombre: "",
        codigo: ""
    });

    const estadosNavBar = ["Inventario", "Herramienta"];
    const [estadoNavBar, setEstadoNavBar] = useState("Inventario");

    const [categorias, setCategorias] = useState([]);
    const [transacciones, setTransacciones] = useState([]);

    const [ultimoPrecio, setUltimoPrecio] = useState("");

    const getData = async() => {
        try{
            const dataCategoria = await sentences.allDataAllRelations("categoria", ["inventario"]);
            const dataTransacciones = await sentences.allDataAllRelations("transaccion_elementos", ["transaccion", "elemento"])

            const compras = dataTransacciones.filter((elemento) => elemento.transaccion.id_compra != null);

            setCategorias(dataCategoria);
            setTransacciones(compras);
            
        }catch (error) {
            console.log("Error al obtener data de elemento de compra:", error);
        }
    }

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        });
    }

    useEffect(() => {
        getData();
    },[])

    return(
        <AgregarElementoCompraDesign
            data={categorias}
            handleSelect={handleSelect}
            handleSubmit={handleSubmit}
            inputData={inputData}
            paramsNavBar={{ estadosNavBar, setEstadoNavBar, estadoNavBar }}
            handleInputChange={handleInputChange}
        />
    );
}