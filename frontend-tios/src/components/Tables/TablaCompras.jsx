import { useEffect, useState } from "react";

export default function TablaCompras({ datos, onSeleccionar, ruc, nombre }) {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const filterTableData = () => {
      const tableData = datos.filter(dato =>
        (dato.nombre?.toLowerCase() || '').includes(nombre.toLowerCase()) &&
        (dato.ruc?.toLowerCase() || '').includes(ruc.toLowerCase())
      );


      setDataTable(tableData);
    };

    filterTableData();
  }, [datos, ruc, nombre]);

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
              <th className="py-2 px-4 text-left">RUC</th>
              <th className="py-2 px-4 text-left">Nombre</th>
              <th className="py-2 px-4 text-left">Fecha de Pago</th>
              <th className="py-2 px-4 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map(item => (
              <tr
                key={item.id}
                className="border-t cursor-pointer hover:bg-gray-100"
                onClick={() => onSeleccionar(item)}
              >
                <td className="py-2 px-4">{item.ruc}</td>
                <td className="py-2 px-4">{item.nombre}</td>
                <td className="py-2 px-4">{item.fecha_pago}</td>
                <td className="py-2 px-4">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
