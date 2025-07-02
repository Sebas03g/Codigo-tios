import { useEffect, useState } from "react";

export default function TablaTarea({
  datos,
  onSeleccionar,
  estado,
  asignador,
  asignado,
  nombre,
  asignacionEmpleado
}) {
  const [dataTable, setDataTable] = useState([]);

  const filterTableData = () => {
    const tableData = datos.filter(dato =>
      dato.nombre.toLowerCase().includes(nombre.toLowerCase()) &&
      dato.asignador.toLowerCase().includes(asignador.toLowerCase()) &&
      dato.asignado.toLowerCase().includes(asignado.toLowerCase()) &&
      (estado === "TODOS" || dato.estado === estado)
    );

    setDataTable(tableData);
  };

  useEffect(() => {
    filterTableData();
  }, [datos, asignador, asignado, nombre, estado]);

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
            <th className="py-2 px-4 text-left">Fecha de Inicio</th>
            <th className="py-2 px-4 text-left">Fecha Final</th>
            <th className="py-2 px-4 text-left">Estado</th>
            <th className="py-2 px-4 text-left">Asignador</th>
            <th className="py-2 px-4 text-left">Asignado</th>
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
              <td className="py-2 px-4">{item.fecha_inicio}</td>
              <td className="py-2 px-4">{item.fecha_final}</td>
              <td className="py-2 px-4">{item.estado}</td>
              <td className="py-2 px-4">{item.asignador}</td>
              <td className="py-2 px-4">
                {item.asignado ? (
                  item.asignado
                ) : (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      asignacionEmpleado(item);
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
