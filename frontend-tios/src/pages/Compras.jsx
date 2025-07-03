import { useState } from "react";
import ComprasPage from "../components/pages/Compras";

export default function Compras(){

    const [checked, setChecked] = useState(false);
    const [porcentaje, setPorcentaje] = useState(0);
    const [rows, setRows] = useState([]);

    const handleAgregarFila = () => {
        setRows([...rows, { nombre: "", valor: "" }]);
    };

    const [estadoCredito, setEstadoCredito] = useState(false);

    const handelCliente = () => {

    }

    return <ComprasPage/>
    
}