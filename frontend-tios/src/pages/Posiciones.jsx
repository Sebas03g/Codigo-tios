import { useEffect, useState } from "react";
import * as sentences from "../services/fetch/sentenciasFetch"
import PosicionesPage from "../components/pages/Posiciones";
import { crearConnect } from "../services/baseFunctions";
import { toast } from 'react-toastify';


export default function Posiciones() {
    const [dataTable, setDataTable] = useState([]);
    const [busqueda, setBusqueda] = useState("");
    const [open, setOpen] = useState(false);

    const [formData, setFormData] = useState({
        nombre: "",
        permisos: []
    }); 

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

    useEffect(() => {
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

    const handleSubmit = async (e) => {
        e.preventDefault()

        formData.permisos = crearConnect(formData.permisos);

        try {
            await sentences.createData("posicion", formData);
            toast.success("Posicion creada exitosamente");
            await fetchData();
            setOpen(false);
            setFormData({
                nombre: "",
                permisos: []
            }); 
        } catch (error) {
            console.error("Error al crear empleado:", error);
        }
    }

    return (
        <PosicionesPage
            busqueda={busqueda}
            handleInputChange={handleInputChange}
            dataTable={dataTable}
            onSeleccionar={onSeleccionar}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
            dataForm = {{ formData, setFormData }}
        />
    );
    
}