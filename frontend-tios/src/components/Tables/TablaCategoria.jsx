import { useEffect, useState } from "react";

import { buscarElementosPorTexto } from "../../services/baseFunctions";

export default function TablaCategoria({ paramsTable, paramsGenerales}) {

  const { dataTable, onSeleccionar} = paramsTable;
  const { codigo, nombre } = paramsGenerales;

  const [tableData, setTableData] = useState([]);

  const filterTableData = () => {
    let data = [...dataTable];

    if (nombre) {
      data = buscarElementosPorTexto(data, nombre, "nombre");
    }

    if (codigo) {
      data = buscarElementosPorTexto(data, codigo, "codigo");
    }

    setTableData(data);
  };


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
            <th className="py-2 px-4 text-left">Tipo de Unidad</th>
            <th className="py-2 px-4 text-left">Precio Por Unidad</th>
            <th className="py-2 px-4 text-left">Cantidad</th>
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
              <td className="py-2 px-4">{item.tipo_unidad}</td>
              <td className="py-2 px-4">{item.precio_unidad}</td>
              <td className="py-2 px-4">{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )} 
    </div>
  );
}