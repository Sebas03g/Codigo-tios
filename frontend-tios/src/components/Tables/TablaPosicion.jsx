import { useEffect, useState } from "react";

export default function TablaPosicion({ datos, onSeleccionar, filtros}) {
  
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const filterTableData = async () => {

      const tableData = datos.filter(dato => dato.nombre.includes(filtros));

      setDataTable(tableData);

    }

    filterTableData();

  },[datos, filtros])
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Numero Permisos</th>
            <th className="py-2 px-4 text-left">Numero Empleados</th>
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
              <td className="py-2 px-4">{item.numero_permisos}</td>
              <td className="py-2 px-4">{item.numero_empleados}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}