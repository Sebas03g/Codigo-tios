import { useEffect, useState } from "react";
import { buscarElementosPorTexto } from "../../services/baseFunctions";

export default function TablaEmpleado({ datos, onSeleccionar, cedula, nombre, estado}) {

  const [dataTable, setDataTable] = useState([]);
  
  const filterTableData = () => {
  
    let data = [...datos];
        
    if (nombre) {
        data = buscarElementosPorTexto(data, nombre, "nombre");
    }
        
    if (cedula) {
        data = buscarElementosPorTexto(data, cedula, "cedula");
    }

    data = data.filter(dato => (estado === "TODOS" || dato.estado === estado));
        
    setDataTable(data);
  
  };

  useEffect(() => {
    filterTableData();
  
  },[datos, cedula, nombre, estado])

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
              <th className="py-2 px-4 text-left">Mail</th>
              <th className="py-2 px-4 text-left">Telefono</th>
              <th className="py-2 px-4 text-left">Sueldo</th>
              <th className="py-2 px-4 text-left">Fecha de Inicio</th>
              <th className="py-2 px-4 text-left">Estado</th>
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
                <td className="py-2 px-4">{item.mail}</td>
                <td className="py-2 px-4">{item.telefono}</td>
                <td className="py-2 px-4">${item.sueldo}</td>
                <td className="py-2 px-4">{item.fecha_inicio}</td>
                <td className="py-2 px-4">{item.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}