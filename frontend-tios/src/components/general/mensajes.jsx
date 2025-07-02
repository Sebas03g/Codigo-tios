import { useState, useEffect } from "react";
import * as sentences from "../../services/fetch/sentenciasFetch";
import TablaMensajes from "../Tables/TablaMensajes";
import NavigationBar from "./navbar";
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

export default function Mensajes({setIsMessageOpen}){
    const [estadoNavBar, setEstadoNavBar] = useState("Sistema");
    const [estadoMensaje, setEstadoMensaje] = useState("ABIERTO");
    const [inputData, setInputData] = useState({
        nombre: "",
        remitente: ""
    });

    const estadosNavBar = ["Sistema", "Personal", "Credito"]

    const [dataMensajes, setDataMensajes] = useState([]);

    const getDataMensajes = async() => {
        try{
            const data = await sentences.allExtraData("mensaje", "remitente");
            const fixedData = await Promise.all(
                data.map((elemento) => {
                    return {
                        id: elemento.id,
                        nombre: elemento.titulo,
                        empleado: elemento.remitente.nombre,
                        fecha_creacion: elemento.fecha_creacion,
                        tipo: elemento.tipo,
                        estado: elemento.estado
                    }
                })
            );
            setDataMensajes(fixedData);

        }catch (error) {
            console.log("Error al obtener data de mensajes:", error);
        }
    };

    

    useEffect(() => {
        getDataMensajes();
    },[]);
    

    const onSeleccionar = (item) =>{

    }

    const handleAgregar = () => {

    }

    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }

    return(

        <div className="relative h-[75vh] w-[80vw] flex flex-col bg-white rounded-xl shadow-lg p-6">
                    <button
                        onClick={() => setIsMessageOpen(false)}
                        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
                    >
                        <IoMdClose />
                    </button>
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">Mensajes de {estadoNavBar}</h1>
                
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
                        name="remitente"
                        value={inputData.remitente}
                        onChange={handleInputChange}
                        placeholder="Codigo..."
                        className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                    <button
                      onClick={handleAgregar}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
                    >
                      <AiOutlinePlus className="text-lg" />
                      <span className="hidden sm:inline">Agregar</span>
                    </button>
                  </div>
        
                  <NavigationBar
                    paramsNavBar={{estadosNavBar, setEstadoNavBar, estadoNavBar}}
                  />
        
                  <TablaMensajes
                    dataMensajes={dataMensajes}
                    onSeleccionar={onSeleccionar}
                    nombre={inputData.nombre}
                    remitente={inputData.remitente}
                    estadoMensaje={estadoMensaje}
                    estadoNavBar={estadoNavBar}
                />
        </div>
        
    )
}