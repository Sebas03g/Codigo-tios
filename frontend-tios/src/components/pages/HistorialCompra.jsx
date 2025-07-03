import { useState, useEffect } from "react";
import TablaCompras from "../Tables/TablaCompras";
import * as sentences from "../services/fetch/sentenciasFetch";

export default function HistorialCompras(){

    const [tableData, setTableData] = useState([]);
    const [inputData, setInputData] = useState({
        ruc:"",
        nombre:""
    });

    const onSeleccionar = () => {

    }

    const getTableData = async() => {
        try{
            const data = await sentences.allDataAllRelations("compra", ["transaccion"])
            const elementosTotales = await sentences.allDataAllRelations("transaccion_elementos", ["transaccion","elemento"])
            const diccionario = []

            for(const dato of data){
                const elementos = elementosTotales.filter((elemento) => elemento.id_transaccion === dato.it_transaccion)
                const elemento = {
                    id: dato.id,
                    nombre: 
                }
                diccionario.push(elemento)
            }

            setTableData(diccionario);

        }catch (error){
            console.log("Error al obtener los datos de compras: ", error);
        }
    }

    return(
        <TablaCompras/>
    );
}