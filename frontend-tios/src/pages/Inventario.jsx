import { useLocation } from 'react-router-dom';
import * as sentences from "../services/fetch/sentenciasFetch";
import { useEffect, useState } from 'react';
import InventarioPage from '../components/pages/Inventario';

export default function Inventario(){
    const location = useLocation();
    const categoria = location.state?.item;

    const [inputData, setInputData] = useState({
        ruc: "",
        ubicacion: ""
    });
    const [tableData, setTableData] = useState([]);

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
                            estado: elemento.estado
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
        />
    );
}