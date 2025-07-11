import { useState, useEffect } from "react";
import TablaTransaccion from "../Tables/TablaTransacciones";
import * as sentences from "../../services/fetch/sentenciasFetch";

export default function HistorialCompras(){

    const [tableData, setTableData] = useState([]);
    const [inputData, setInputData] = useState({
        ruc:"",
        nombre:""
    });

    const onSeleccionar = () => {

    }

    const getTableData = async () => {
    try {
        const data = await sentences.allDataAllRelations("transaccion", ["elementos", "empleado", "compra", "persona", "obra"]);

        const dataFiltrada = data.filter((dato) => dato.id_compra !== null);

        const elementosTotales = await sentences.allDataAllRelations("transaccion_elementos", ["elemento"]);

        const transaccionesFormateadas = dataFiltrada.map((dato) => {
            const elementos = elementosTotales.filter((el) => el.id_transaccion === dato.id);
            const total = elementos.reduce((acc, el) => acc + (1 - el.elemento.descuento) * (el.cantidad * el.elemento.precio), 0);
            console.log(dato)
            return {
                id: dato.id,
                nombre_empleado: dato.empleado.nombre,
                obra: dato?.obra ? dato.obra.nombre : null,
                ruc: dato.persona.ruc,
                nombre_persona: dato.persona.nombre,
                fecha: dato.fecha,
                total: total,
                credito: dato.compra.fechaCredito,
            };
        });

        setTableData(transaccionesFormateadas);
    } catch (error) {
        console.error("Error al obtener los datos de compras: ", error);
    }
    };


    useEffect(() => {
        getTableData();
    },[])

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        });
    }

    return(
        <div className="h-full flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Historial de Compras</h1>
            <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-wrap gap-4">
                    <input
                        type="text"
                        name="nombre"
                        value={inputData.nombre}
                        onChange={handleInputChange}
                        placeholder="Nombre..."
                        className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="ruc"
                        value={inputData.ruc}
                        onChange={handleInputChange}
                        placeholder="RUC..."
                        className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>
            </div>
            <TablaTransaccion
                datos={tableData}
                onSeleccionar={onSeleccionar}
                tipo={"Compra"}
                ruc={inputData.ruc}
                nombre={inputData.nombre}
            />
        </div>
    );
}