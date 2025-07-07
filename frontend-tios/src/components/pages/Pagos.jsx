import NavigationBar from "../general/navbar.jsx";
import TablaPagos from "../Tables/TablaPagos.jsx";
import { AiOutlinePlus } from "react-icons/ai";

export default function PagosPage({
  cedula,
  posicion,
  handleInputChange,
  dataTable,
  onSeleccionar,
  handlePagar,
  estadoNavBar,
  estadosNavBar,
  setEstadoNavBar
}) {

    const paramsNavBar = {estadoNavBar, estadosNavBar, setEstadoNavBar};

    return (
        <div className="h-full flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{estadoNavBar}</h1>

        <div className="flex flex-col gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
            <input
                type="text"
                name="cedula"
                value={cedula}
                onChange={handleInputChange}
                placeholder="Cedula..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="text"
                name="posicion"
                value={posicion}
                onChange={handleInputChange}
                placeholder="Pago..."
                className="w-full sm:w-48 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            </div>
        </div>

        <NavigationBar
            paramsNavBar={paramsNavBar}
        />

        <TablaPagos
            tableData={dataTable}
            onSeleccionar={onSeleccionar}
            handlePagar={handlePagar}
            posicion={posicion}
            cedula={cedula}
            tipo={estadoNavBar}
        />

        </div>
    );
}
