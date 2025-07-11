import { useState, useEffect } from "react";

export default function TablaTransaccion({ datos, onSeleccionar, tipo, ruc, nombre}) {

  const [dataTable, setDataTable] = useState([]);

  console.log(datos);
  
    useEffect(() => {
      const filterTableData = () => {
        const tableData = datos.filter(dato =>
          (dato.empleado?.nombre.toLowerCase() || '').includes(nombre.toLowerCase()) &&
          (dato.persona?.ruc.toLowerCase() || '').includes(ruc.toLowerCase())
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
            <th className="py-2 px-4 text-left">Empleado</th>
            <th className="py-2 px-4 text-left">Fecha</th>
            <th className="py-2 px-4 text-left">{tipo === "Compra" ? "Proveedor" : "Cliente"}</th>
            <th className="py-2 px-4 text-left">RUC</th>
            <th className="py-2 px-4 text-left">Obra</th>
            {tipo === "Compra" && (
              <th className="py-2 px-4 text-left">Credito</th>
            )}
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
              <td className="py-2 px-4">{item.nombre_empleado}</td>
              <td className="py-2 px-4">{item.fecha}</td>
              <td className="py-2 px-4">{item.nombre_persona}</td>
              <td className="py-2 px-4">{item.ruc}</td>
              <td className="py-2 px-4">{item.obra ? item.obra : "Particular"}</td>
              {tipo === "Compra" && (
                <th className="py-2 px-4 text-left">{item.credito ? item.credito : "No Aplica"}</th>
              )}
              <td className="py-2 px-4">{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      )}
    </div>
  );
}