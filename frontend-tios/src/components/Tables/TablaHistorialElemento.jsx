import { useEffect, useState } from "react";
import { buscarElementosPorTexto } from "../../services/baseFunctions";

export default function TablaHistorialElementos({
    datos, onSeleccionar, nombre
}){
    const [dataTable, setDataTable] = useState([]);

    const filterTableData = () => {

        let data = [...datos];
        
        if (nombre) {
            data = buscarElementosPorTexto(data, nombre, "nombre");
        }

        setDataTable(data);

    };

    useEffect(() => {
        filterTableData();
    }, [datos, nombre]);

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
                <th className="py-2 px-4 text-left">Transaccion</th>
                <th className="py-2 px-4 text-left">Fecha</th>
                <th className="py-2 px-4 text-left">Cantidad</th>
                <th className="py-2 px-4 text-left">Precio</th>
                <th className="py-2 px-4 text-left">Descuento</th>
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
                <td className="py-2 px-4">{item.proveedor}</td>
                <td className="py-2 px-4">{item.tipo_transaccion}</td>
                <td className="py-2 px-4">{item.fecha}</td>
                <td className="py-2 px-4">{item.cantidad}</td>
                <td className="py-2 px-4">{item.precio}</td>
                <td className="py-2 px-4">{item.descuento}</td>
                <td className="py-2 px-4">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );


}