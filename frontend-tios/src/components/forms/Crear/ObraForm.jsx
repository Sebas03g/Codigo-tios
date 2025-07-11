import Mapa from "../../MapContainer.jsx";
import { IoClose } from "react-icons/io5";
import ObraBase from "../Base/ObraBase.jsx";
import { useState } from "react";


export default function ObraForm({handleSubmit, setOpen}){

    const [formData, setFormData] = useState({
        nombre:"",
        fecha_final:"",
        tipoObra:"",
        porcentaje_venta: 0.0,
        lat: 0.0,
        lng: 0.0,
        estado: ""
    });

    const [cliente, setCliente] = useState(null)

    const [punto, setPunto] = useState({
        lat: -0.22985,
        lng: -78.52495
    });

    const handleDateChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleCliente = () => {

    }

    return (
        <ObraBase
            formData={formData}
            punto={punto}
            setPunto={setPunto}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
            cliente={cliente}
            handleCliente={handleCliente}
            handleDateChange={handleDateChange}
        />
    );
}