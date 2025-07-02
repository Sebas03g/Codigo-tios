import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch";
import PedidosPage from "../components/pages/Pedidos";

export default function Pedidos(){
    const [inputData, setInputData] = useState({
        obra: ""
    });

    const [tableData, setTableData] = useState([]);

    const [estadoPedido, setEstadoPedido] = useState("TODOS");

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }

    const handleEstadoPedido = (e) => {
        setEstadoPedido(e.target.value);
    }

    const handleAgregar = () => {

    }

    const onSeleccionar = (item) => {

    }

    const getEstadoPedido = (pedido) => {
        const [estado, setEstado] = useState("ABIERTO");

        for(elemento of pedido.elemento){
            if(elemento.estado == "CERRADO"){
                setEstado("CERRADO");
            }else if(estado === "CERRADO" && elemento.estado != estado){
                setEstado("PROCESO")
            }
        }

        return estado;
    }

    const getTableData = async() => {
        try{
            const data = await sentences.allDataAllRelations("pedido", ["elemento", "obra"]);

            const dataTable = data.map((pedido) => ({
                id:pedido.id,
                nombre_obra: pedido.obra.nombre,
                numero_elementos: pedido.elemento.length,
                estado: getEstadoPedido(pedido)
            }));

            setTableData(dataTable);

        }catch (error) {
            console.log("Error al obtener data de pedido:", error);
        }
    }

    const handleAsignar = () => {

    }

    useEffect(() => {
        getTableData();
    }, []);

    return(
        <PedidosPage
            paramsPage = {{handleInputChange, handleAgregar, handleEstadoPedido }}
            paramsTable = {{ tableData, onSeleccionar, handleAsignar }}
            paramsGeneral = {{obra: inputData.obra, estadoPedido}}
        />
    );

}