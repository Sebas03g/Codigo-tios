import { useEffect, useState } from "react";
import AgregarCategoriaCompraDesign from "../Diseño/AgregarCategoriaCompra";
import * as sentences from "../../../../services/fetch/sentenciasFetch"

export default function AgregarCategoriaCompra({ setOpen, handleSubmit, dataProveedor }){
    const [formData, setFormData] = useState({
        codigo: "",
        nombre_categoria: "",
        descripcion_categoria: "",
        tipo_categoria: "",
        tipo_unidad: "",
        cantidad: 0.0,
        precio: 0.0,
        id_categoria: 0,
        tiempo: new Date()
    });

    const [tiempoData, setTiempoData] = useState({
        dias: 0,
        meses: 0,
        anios: 0,
    });

    const [opcionesInventario, setOpcionesInventario]= useState([]);
    const [data, setData] = useState([])
    const [categorias, setCategorias] = useState([]);
    const [transacciones, setTransacciones] = useState([]);

    const [ultimoPrecio, setUltimoPrecio] = useState(0.0);

    const handleTimeChange = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);

        const hoy = new Date();
        let tiempoCalculado = new Date(hoy);

        if(name=="dias"){
            tiempoCalculado.setDate(hoy.getDate() + (value || 0));
        }else if(name=="meses"){
            tiempoCalculado.setMonth(hoy.getMonth() + (value || 0));
        }else{
            tiempoCalculado.setFullYear(hoy.getFullYear() + (value || 0));
        }

        setTiempoData({
            ...tiempoData,
            [name]: value,
        });

        setFormData({
            ...formData,
            tiempo: tiempoCalculado
        })
    };

    const getData = async() => {
        try{
            const categorias = await sentences.allDataAllRelations("categoria",["inventario"]);
            const transacciones = await sentences.allDataAllRelations("transaccion",["elementos", "persona"]);
            const transaccionesFiltradas = transacciones.filter(elemento => elemento.id_compra !== null);

            const opciones = categorias.map((elemento) => {
                return({
                    value: elemento.id,
                    label: elemento.nombre
                });
            });

            setOpcionesInventario(opciones);
            setTransacciones(transaccionesFiltradas);
            setCategorias(categorias);

        } catch (error) {
            console.error("Error al obtener informacion de categorias:", error);
        }
    }

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        if(name == "codigo"){
            const elemento = categorias.find(categoria => categoria.codigo === value);

            setFormData({
                ...formData,
                nombre_categoria: elemento.nombre,
                descripcion_categoria: elemento.descripcion,
                tipo_categoria: elemento.tipo,
                tipo_unidad: elemento.tipo_unidad,
            });

        }else if(name == "nombre_categoria"){
            const elemento = categorias.find(categoria => categoria.name === value);
            setFormData({
                ...formData,
                codigo: elemento.codigo,
                descripcion_categoria: elemento.descripcion,
                tipo_categoria: elemento.tipo,
                tipo_unidad: elemento.tipo_unidad,
            });
        }

        setFormData({
            ...formData,
            [name]: value
        });
        
    }

    useEffect(() => {
        getData();
    },[dataProveedor])

    return(
        <AgregarCategoriaCompraDesign
            handleSubmit={handleSubmit}
            setOpen={setOpen}
            formData={formData}
            handleChange={handleChange}
            handleTimeChange={handleTimeChange}
            opcionesInventario={opcionesInventario}
        />
    );

}