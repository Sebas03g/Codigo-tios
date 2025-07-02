import { useEffect, useState } from "react";

export default function TablaHerramienta({ paramsTable, paramsGenerales}) {

  const { dataTable, onSeleccionar} = paramsTable;
  const { codigo, nombre } = paramsGenerales;

  const [tableData, setTableData] = useState([]);
  
    const filterTableData = async () => {
      const data = dataTable.filter(dato =>
            dato.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
            dato.codigo.toLowerCase().includes(codigo.toLowerCase())
        );
  
  
      setTableData(data);
    }
  
    useEffect(() => {
        filterTableData();
    },[dataTable, codigo, nombre])

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
            <th className="py-2 px-4 text-left">Codigo</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Estado</th>
              <th className="py-2 px-4 text-left">Mantenimiento</th>
            <th className="py-2 px-4 text-left">Tiempo Para Mantenimiento</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.codigo}</td>
              <td className="py-2 px-4">{item.nombre}</td>
              <td className="py-2 px-4">{item.estado}</td>
              <td className="py-2 px-4">{item.mantenimiento}</td>
              <td className="py-2 px-4">{item.precio_unidad}</td>
              <td className="py-2 px-4">{item.tiempo}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )} 
    </div>
  );
}