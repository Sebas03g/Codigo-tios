import { useEffect, useState } from "react";
import { buscarElementosPorTexto } from "../../services/baseFunctions";

export default function TablaPedidos({ paramsTable, paramsGeneral }) {

  const {tableData, onSeleccionar, handleAsignar} = paramsTable;
  const {obra, estadoPedido} = paramsGeneral;

  const [dataTable, setDataTable] = useState([]);

  const filterTableData = () => {
  
      let data = [...tableData];
          
      if (nombre) {
          data = buscarElementosPorTexto(data, nombre, "nombre");
      }        

      data = data.filter((estadoMensaje==="TODOS" || data.estado === estadoPedido))
          
      setDataTable(data);
    
  };

  useEffect(() => {
    filterTableData();
  }, [obra, estadoPedido, tableData]);

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
            <th className="py-2 px-4 text-left">Numero Pedido</th>
            <th className="py-2 px-4 text-left">Nombre Obra</th>
            <th className="py-2 px-4 text-left">Numeros Elementos</th>
            <th className="py-2 px-4 text-left">Estado</th>
            <th className="py-2 px-4 text-left">Asignar</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.nombre_obra}</td>
              <td className="py-2 px-4">{item.numero_elementos}</td>
              <td className="py-2 px-4">{item.estado}</td>
              <td className="py-2 px-4">
                {item.estado === "CERRADO" ? (
                  <td className="py-2 px-4">Pedido Cerrado</td>
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAsignar(item);
                    }}
                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-1 px-3 rounded shadow transition duration-150"
                  >
                    Asignar
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      )} 
    </div>
  );
}