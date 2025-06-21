export default function TablaPedido({ datos, onSeleccionar}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Numero Pedido</th>
            <th className="py-2 px-4 text-left">Nombre Obra</th>
            <th className="py-2 px-4 text-left">Numeros Elementos</th>
            <th className="py-2 px-4 text-left">Estado</th>
            <th className="py-2 px-4 text-left">Asignar</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.numero_pedido}</td>
              <td className="py-2 px-4">{item.nombre_obra}</td>
              <td className="py-2 px-4">{item.numero_elementos}</td>
              <td className="py-2 px-4">{item.estado}</td>
              <td className="py-2 px-4">{item.asignar}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}