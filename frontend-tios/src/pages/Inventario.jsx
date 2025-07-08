import { useLocation } from 'react-router-dom';
import * as sentences from "../services/fetch/sentenciasFetch";
import {transaction} from "../services/fetch/fetchTransactions";
import { useEffect, useState } from 'react';
import InventarioPage from '../components/pages/Inventario';
import { toast } from 'react-toastify';

export default function Inventario(){
    const location = useLocation();
    const categoria = location.state?.item;

    const [inputData, setInputData] = useState({
        ruc: "",
        ubicacion: ""
    });
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        const inventario ={
            precio:formData.precio,
            cantidad:formData.cantidad,
            id_categoria:categoria.id,
            id_ubicacion:formData.id_ubicacion
        }
        const createForm = {
            ruc:formData.ruc,
            nombre:formData.nombre,
            mail:formData.mail,
            telefono:formData.telefono,
            inventario:[inventario],
            obra:null,
        };

        try {
            await transaction(createForm, "purchase");
            toast.success("Compra exitosa");
            await getDataCategoria();
            setOpen(false);
        } catch (error) {
            console.error("Error al crear empleado:", error);
        }
    };


    const getDataCategoria = async() => {
        const inventario = await sentences.allDataAllRelations("inventario", ["proveedor","ubicacion"])
        const filteredData = inventario.filter((elemento) => elemento.id_categoria == categoria.id);

        const data = filteredData.map((elemento) => {
            return {
                    precio: elemento.precio,
                    descuento: elemento.descuento,
                    cantidad: elemento.cantidad,
                    ubicacion: elemento.ubicacion.nombre,
                    proveedor: elemento.proveedor.ruc,
                    mantenimiento: categoria.tiempo,
                    estado: elemento?.estado ? elemento.estado : null
                }
            });
                

        setTableData(data);
    }

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }

    const onSeleccionar = (item) => {

    }

    const handelAgregar = () => {

    }

    useEffect(() => {
        getDataCategoria();
    }, []);

    return(
        <InventarioPage
            tableData={tableData}
            ruc={inputData.ruc}
            ubicacion={inputData.ubicacion}
            handleInputChange={handleInputChange}
            onSeleccionar={onSeleccionar}
            handleAgregar={handelAgregar}
            categoria={categoria}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
        />
    );
}