import { useEffect, useState } from "react";
import PagosPage from "../components/pages/Pagos";

export default function Pagos(){
    const [inputData, setInputData] = useState({
        cedula: "",
        posicion: "",
    })

    const [tableData, setTableData] = useState([])
    const estadosNavBar = ["Pagos del Mes", "Historial"];
    const [estadoNavBar, setEstadoNavBar] = useState("Pagos del Mes");

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.value]: e.target.name
        });
    }

    const getHorasTotal = (diasTrabajo) => {

        let horas_total = 0;
        
        for(const dia of diasTrabajo){
            const inicio = new Date(dia.fecha_inicio);
            const final = new Date(dia.fecha_final);

            horas_total += (final - inicio) / (1000 * 60 * 60);
        }

        return horas_total;
    }

    const getTotal = (elemento) => {
        let total = 0;
        const horasTotal = getHorasTotal(elemento.diasTrabajo) 

        total += horasTotal*elemento.empleado.sueldo;

        for(const transaccion of elemento.transaccionesEspeciales){
            total += transaccion.total;
        }

        return total

    }

    const getTableData = async() => {
        try{
            const data = await sentences.allDataAllRelations("pago", ["empleado", "diasTrabajo", "transaccionesEspeciales"]);
            if(estadoNavBar === "Pagos del Mes"){
                const current_payments = data.filter((dato) => dato.estado == "ACTIVO")
            }else{
                const current_payments = data.filter((dato) => dato.estado != "ACTIVO")
            }
            
            const dataTable = current_payments.map((payment) => ({
                id:payment.id,
                nombre: payment.empleado.nombre,
                cedula: payment.empleado.cedula,
                sueldo: payment.empleado.sueldo,
                horas: getHorasTotal(payment.diasTrabajo),
                total: getTotal(payment),
            }));
    
            setTableData(dataTable);
    
        }catch (error) {
            console.log("Error al obtener data de pedido:", error);
        }
    }

    useEffect(() => {
        getTableData()
    },[])

    const onSeleccionar = (item) => {

    }

    const handlePagar = (item) => {

    }

    return(
        <PagosPage
            cedula={inputData.cedula}
            posicion={inputData.posicion}
            handleInputChange={handleInputChange}
            dataTable={tableData}
            onSeleccionar={onSeleccionar}
            handlePagar={handlePagar}
            estadoNavBar={estadoNavBar}
            estadosNavBar={estadosNavBar}
            setEstadoNavBar={setEstadoNavBar}
        />
    );

}