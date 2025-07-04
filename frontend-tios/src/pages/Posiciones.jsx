import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch"
import PosicionesPage from "../components/pages/Posiciones";

export default function Posiciones() {
    const [dataTable, setDataTable] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const posicionesData = await sentences.allDataAllRelations("posicion", ["empleado", "permisos"])

                const tableData = await Promise.all(
                    posicionesData.map(async (posicion) => {
                        return {
                            id: posicion.id,
                            nombre: posicion.nombre,
                            numero_permisos: posicion.permisos.length,
                            numero_empleados: posicion.empleado.length,
                        };
                    })
                );
                setDataTable(tableData);

            } catch (error) {
                console.log("Error al obtener posiciones o sus datos relacionados:", error);
            }
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setBusqueda(e.target.value);
    };

    const onSeleccionar = (item) => {
        console.log(item)
    }

    const handleAgregar = (e) => {

    };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <PosicionesPage
            busqueda={busqueda}
            handleInputChange={handleInputChange}
            handleAgregar={handleAgregar}
            dataTable={dataTable}
            onSeleccionar={onSeleccionar}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
        />
    );
    
}