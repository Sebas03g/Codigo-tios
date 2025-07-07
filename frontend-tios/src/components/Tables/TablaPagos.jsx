import { useEffect, useState } from "react";

export default function TablaPagos({ 
    tableData, onSeleccionar, handlePagar,
     posicion, cedula, tipo
}) {

  const [dataTable, setDataTable] = useState([]);

  const filterTableData = () => {
    const data = tableData.filter(dato =>
      dato.posicion.toLowerCase().includes(posicion.toLowerCase()) &&
      dato.cedula.toLowerCase().includes(cedula.toLowerCase())
    );

    setDataTable(data);
  }

  useEffect(() => {
    filterTableData();
  }, [posicion, cedula, tableData]);

  return (
    <div className="overflow-x-auto">
          
       {dataTable.length === 0 ? (
        <div className="text-center text-gray-600 font-medium p-4">
          No existen datos para mostrar.
        </div>
      ) : (   

      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Cedula</th>
            <th className="py-2 px-4 text-left">sueldo</th>
            <th className="py-2 px-4 text-left">Horas</th>
            <th className="py-2 px-4 text-left">Total</th>
            <th className="py-2 px-4 text-left">Pagar</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
                <td className="py-2 px-4">{item.nombre}</td>
                <td className="py-2 px-4">{item.cedula}</td>
                <td className="py-2 px-4">{item.sueldo}</td>
                <td className="py-2 px-4">{item.horas}</td>
                <td className="py-2 px-4">{item.total}</td>
                
                {tipo === "Pagos del Mes" && (
                    <td className="py-2 px-4">
                        <button
                            onClick={(e) => {
                            e.stopPropagation();
                            handlePagar(item);
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded shadow transition duration-150"
                        >
                            Pagar
                        </button>
                    </td>
                )}
            </tr>
          ))}
        </tbody>
      </table>
      )} 
    </div>
  );
}