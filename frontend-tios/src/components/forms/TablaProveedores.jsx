import React from "react";

export default function TablaProveedores({ datos, onSeleccionar }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">RUC</th>
            <th className="py-2 px-4 text-left">Proveedor</th>
            <th className="py-2 px-4 text-left">Cantidad</th>
            <th className="py-2 px-4 text-left">Precio</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr
              key={index}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.ruc_proveedor}</td>
              <td className="py-2 px-4">{item.nombre_proveedor}</td>
              <td className="py-2 px-4">{item.cantidad}</td>
              <td className="py-2 px-4">${item.precio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

