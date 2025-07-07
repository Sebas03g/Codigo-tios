import TablaPosicion from "../../components/Tables/TablaPosicion.jsx";
import { AiOutlinePlus } from "react-icons/ai";
import Crear from "../forms/Crear/PosicionForm.jsx";

export default function PosicionesPage({
    busqueda, handleInputChange, 
    dataTable, onSeleccionar, handleSubmit,
    open, setOpen,dataForm
}){
    return(
        <div className="h-full flex flex-col">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Posiciones</h1>

            <div className="flex items-center gap-2 mb-6">
            <input
                type="text"
                value={busqueda}
                onChange={handleInputChange}
                placeholder="Buscar..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                <AiOutlinePlus className="text-lg" />
                <span className="hidden sm:inline">Agregar</span>
            </button>
            </div>

            <TablaPosicion
            datos={dataTable}
            onSeleccionar={onSeleccionar}
            filtros={busqueda}
            />
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-grey bg-opacity-40">
                    <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full">
                        <Crear 
                          setOpen={setOpen}
                          handleSubmit={handleSubmit}
                          dataForm={dataForm}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}