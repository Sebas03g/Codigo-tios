import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch"
import TablaPosicion from "../components/Tables/TablaPosicion";

export default function PosicionesPage() {
  const [dataTable, setDataTable] = useState([]);
  const [busqueda, setBusqueda] = useState("Busqueda Por Nombre");

    useEffect(() => {
        const fetchData = async () => {
        try {
            const posicionesData = await sentences.getAllData("posicion");

            const tableData = await Promise.all(
            posicionesData.map(async (posicion) => {
                const dataEmpleados = await sentences.extraData("posicion", posicion.id, "empleado");
                const dataPermisos = await sentences.extraData("posicion", posicion.id, "permisos");

                return {
                nombre: posicion.nombre,
                numero_permisos: dataPermisos.length,
                numero_empleados: dataEmpleados.length,
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
        setBusqueda(toString(e.target.value));
    };

    const onSeleccionar = (e) => {

    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Página de Búsqueda</h1>

        <div className="flex items-center gap-2 mb-6">
            <input
            type="text"
            value={busqueda}
            onChange={handleInputChange}
            placeholder="Buscar..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <TablaPosicion
            datos = {dataTable}
            onSeleccionar={onSeleccionar}
            filtros={busqueda}
        />
        </div>
    );
    
}