import { useState, useEffect } from "react";
import { buscarElementosPorTexto } from "../../services/baseFunctions";

export default function TablaMensajes({ datos, onSeleccionar, nombre, remitente, estadoMensaje, estadoNavBar}) {
  
  const [tableData, setTableData] = useState([]);

  const filterTableData = () => {
  
      let data = [...datos];
          
      if (nombre) {
          data = buscarElementosPorTexto(data, nombre, "nombre");
      }
          
      if (remitente) {
          data = buscarElementosPorTexto(data, remitente, "empleado");
      }

      data = data.filter((estadoMensaje==="TODOS" || data.estado === estadoMensaje)  && 
                          data.tipo === estadoNavBar)
          
      setTableData(data);
    
  };
    
  useEffect(() => {
    filterTableData();
  }, [datos, nombre, remitente, estadoMensaje, estadoNavBar]);

  return (
    <div className="overflow-x-auto">
      {tableData.length === 0 ? (
        <div className="text-center text-gray-600 font-medium p-4">
          No existen datos para mostrar.
        </div>
      ) : (   
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Tipo</th>
            <th className="py-2 px-4 text-left">Empleado</th>
            <th className="py-2 px-4 text-left">Fecha Creacion</th>
            <th className="py-2 px-4 text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.nombre}</td>
              <td className="py-2 px-4">{item.tipo}</td>
              <td className="py-2 px-4">{item.empleado}</td>
              <td className="py-2 px-4">{item.fecha_creacion}</td>
              <td className="py-2 px-4">{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )} 
    </div>
  );
}