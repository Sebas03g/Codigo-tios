import { useEffect, useState } from "react";
import EmpleadosPage from "../components/pages/Empleados";
import * as sentences from "../services/fetch/sentenciasFetch";

export default function Empleados(){

    const [formData, setFormData] = useState({
        nombre: "",
        cedula: ""
    })

    const [open, setOpen] = useState(false);

    const [estado, setEstado] = useState("TRABAJANDO");

    const [dataTable, setDataTable] = useState([]);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleAgregar = () => {
        setOpen(true);
    }

    useEffect(() => {
        const getAllEmployeeData = async () => {
            try{
                const empleadosData = await sentences.getAllData("empleado");
                if(!empleadosData.mensaje){
                    setDataTable(empleadosData);
                }
                
            }catch (error) {
                console.log("Error al obtener data de empleados:", error);
            }
        };

        getAllEmployeeData();

    }, [])

    const onSeleccionar = (item) => {

    }

    const handleEstado = (e) => {
        setEstado(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await sentences.createData("empleado", formData);
          alert("Empleado creado exitosamente");
        } catch (error) {
          console.error("Error al crear empleado:", error);
        }
    };
    
    return(
        <EmpleadosPage
            nombre={formData.nombre}
            cedula={formData.cedula}
            handleInputChange={handleInputChange}
            handleAgregar={handleAgregar}
            dataTable={dataTable}
            onSeleccionar={onSeleccionar}
            handleEstado={handleEstado}
            estado={estado}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
        />
    );

}