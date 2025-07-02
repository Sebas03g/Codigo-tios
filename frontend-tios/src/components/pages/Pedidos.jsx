import TablaPedidos from "../Tables/TablaPedidos";
import { AiOutlinePlus } from "react-icons/ai";
export default function PedidosPage({
    paramsPage, paramsTable,paramsGeneral
}){

    const {obra, estadoPedido} = paramsGeneral;
    const {handleInputChange, handleAgregar, handleEstadoPedido} = paramsPage;

    return (
        <div className="h-full flex flex-col">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Pedidos</h1>
    
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                name="obra"
                value={obra}
                onChange={handleInputChange}
                placeholder="Obra..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
    
            <div className="flex flex-wrap gap-4">
              {["TODOS", "ABIERTO", "PROCESO", "CERRADO"].map((opcion) => (
                <label key={opcion} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={opcion}
                    checked={estadoPedido === opcion}
                    onChange={handleEstadoPedido}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <span>{opcion[0] + opcion.slice(1).toLowerCase()}</span>
                </label>
              ))}
            </div>
            <button
              onClick={handleAgregar}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-fit"
            >
              <AiOutlinePlus className="text-lg" />
              <span className="hidden sm:inline">Agregar</span>
            </button>
          </div>
    
          <TablaPedidos
            paramsTable={paramsTable}
            paramsGeneral={paramsGeneral}
          />
        </div>
      );
}