import { useEffect, useState } from "react";
import EmpleadosPage from "../components/pages/Empleados";
import * as sentences from "../services/fetch/sentenciasFetch";
import { toast } from 'react-toastify';


export default function Empleados() {
  const [formData, setFormData] = useState({
    nombre: "",
    cedula: ""
  });

  const [open, setOpen] = useState(false);
  const [estado, setEstado] = useState("TRABAJANDO");
  const [dataTable, setDataTable] = useState([]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAgregar = () => setOpen(true);

  const getAllEmployeeData = async () => {
    try {
      const empleadosData = await sentences.getAllData("empleado");
      if (!empleadosData.mensaje) {
        setDataTable(empleadosData);
      }
    } catch (error) {
      console.log("Error al obtener data de empleados:", error);
    }
  };

  useEffect(() => {
    getAllEmployeeData();
  }, []);

  const onSeleccionar = (item) => {};

  const handleEstado = (e) => setEstado(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const createForm = {
      nombre: form.nombre.value,
      cedula: form.cedula.value,
      mail: form.mail.value,
      telefono: form.telefono.value,
      id_posicion: parseInt(form.id_posicion.value),
      sueldo: parseFloat(form.sueldo.value)
    };

    try {
      await sentences.createData("empleado", createForm);
      toast.success("Empleado creado exitosamente");
      await getAllEmployeeData();
      setOpen(false);
    } catch (error) {
      console.error("Error al crear empleado:", error);
    }
  };

  return (
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
