import { useLocation } from 'react-router-dom';
import * as sentences from "../services/fetch/sentenciasFetch";
import {transaction} from "../services/fetch/fetchTransactions";
import { useEffect, useState } from 'react';
import InventarioPage from '../components/pages/Inventario';
import { toast } from 'react-toastify';

export default function Inventario(){
    const location = useLocation();
    const categoria = location.state?.item;

    const estadosNavBar = ["Inventario", "Historial"];
    const [estadoNavBar, setEstadoNavBar] = useState("Inventario");

    const [inputData, setInputData] = useState({
        nombre: "",
        ubicacion: "",
        tipo: ""
    });
    const [tableData, setTableData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleSubmit = async (e, formData) => {
        e.preventDefault();
        const inventario ={
            precio:formData.precio,
            cantidad:formData.cantidad,
            id_categoria:categoria.id,
            id_ubicacion:formData.id_ubicacion
        }
        const createForm = {
            ruc:formData.ruc,
            nombre:formData.nombre,
            mail:formData.mail,
            telefono:formData.telefono,
            inventario:[inventario],
            obra:null,
        };

        try {
            await transaction(createForm, "purchase");
            toast.success("Compra exitosa");
            await getTableData();
            setOpen(false);
        } catch (error) {
            console.error("Error al crear empleado:", error);
        }
    };

    const getTableData = async() => {
        if(estadoNavBar === "Inventario"){
            await getDataCategoria();
        }else{
            await getDataHistory();
        }
    }

    const getDataCategoria = async() => {
        const inventario = await sentences.allDataAllRelations("inventario", ["proveedor","ubicacion"])
        const filteredData = inventario.filter((elemento) => elemento.id_categoria == categoria.id);

        const data = filteredData.map((elemento) => {
            return {
                    id: elemento.id,
                    precio: elemento.precio,
                    descuento: elemento.descuento,
                    cantidad: elemento.cantidad,
                    ubicacion: elemento.ubicacion.nombre,
                    proveedor: elemento.proveedor.nombre,
                    mantenimiento: categoria.tiempo,
                    estado: elemento?.estado ? elemento.estado : null
                }
            });
                

        setTableData(data);
    }

    const getDataHistory = async () => {
        console.log("HISTORIAL !!!!")
        try {
            const [elementos, transacciones] = await Promise.all([
                sentences.allDataAllRelations("transaccion_elementos", ["transaccion", "elemento"]),
                sentences.allDataAllRelations("transaccion", ["persona", "compra", "venta", "devolucion"])
            ]);

            const transaccionesMap = new Map();
                transacciones.forEach(trans => {
                transaccionesMap.set(trans.id, trans);
            });

            const filteredData = elementos.filter(el => el.elemento.id_categoria === categoria.id);

            const data = filteredData.map(elemento => {
                const transaccion = transaccionesMap.get(elemento.id_transaccion);

                let tipo = "";
                let precio = 0;

                if (transaccion?.compra) {
                    tipo = "Compra";
                    precio = parseFloat(elemento.precio);
                } else if (transaccion?.venta) {
                    tipo = "Venta";
                    precio = parseFloat(elemento.precio) * (1 + parseFloat(elemento.porcentaje || 0));
                } else if (transaccion?.devolucion) {
                    tipo = "Devolución";
                    precio = parseFloat(elemento.precio) * (1 - parseFloat(elemento.descuento || 0));
                }

                return {
                    id: elemento.id,
                    proveedor: transaccion?.persona?.nombre || "N/A",
                    tipo_transaccion: tipo,
                    fecha: transaccion?.fecha || "—",
                    cantidad: elemento.cantidad,
                    precio,
                    total: precio * elemento.cantidad,
                };
            });

            console.log(data);

            setTableData(data);
        } catch (error) {
            console.error("Error al obtener el historial:", error);
        }
    };


    const handleInputChange = (e) => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        });
    }

    const onSeleccionar = (item) => {
        console.log(item);
    }

    const handelAgregar = () => {

    }

    useEffect(() => {
        getTableData();
    }, [estadoNavBar]);

    return(
        <InventarioPage
            tableData={tableData}
            nombre={inputData.nombre}
            ubicacion={inputData.ubicacion}
            handleInputChange={handleInputChange}
            onSeleccionar={onSeleccionar}
            handleAgregar={handelAgregar}
            categoria={categoria}
            open={open}
            setOpen={setOpen}
            handleSubmit={handleSubmit}
            paramsNavBar={{ estadosNavBar, setEstadoNavBar, estadoNavBar }}
        />
    );
}