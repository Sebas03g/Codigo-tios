import { useEffect, useState } from "react";

export default function TablaCategoriaHerramienta({
    datos, onSeleccionar, nombre, ubicacion
}){
    const [dataTable, setDataTable] = useState([]);

    const filterTableData = () => {

        const tableData = datos.filter(dato =>
          (dato.ubicacion?.toLowerCase() || '').includes(ubicacion.toLowerCase()) &&
          (dato.nombre?.toLowerCase() || '').includes(nombre.toLowerCase())
        );

        setDataTable(tableData);

    };

    useEffect(() => {
        filterTableData();
    }, [datos, nombre, ubicacion]);

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
                <th className="py-2 px-4 text-left">Proveedor</th>
                <th className="py-2 px-4 text-left">Mantenimiento</th>
                <th className="py-2 px-4 text-left">Ubicacion</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map(item => (
              <tr
                key={item.id}
                className="border-t cursor-pointer hover:bg-gray-100"
                onClick={() => onSeleccionar(item)}
              >
                <td className="py-2 px-4">{item.proveedor}</td>
                <td className="py-2 px-4">{item.mantenimiento}</td>
                <td className="py-2 px-4">{item.ubicacion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}