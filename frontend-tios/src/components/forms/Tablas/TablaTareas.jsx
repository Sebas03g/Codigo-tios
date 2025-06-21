export default function TablaTarea({ datos, onSeleccionar}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Fecha de Inicio </th>
            <th className="py-2 px-4 text-left">Fecha Final</th>
            <th className="py-2 px-4 text-left">Estado</th>
            <th className="py-2 px-4 text-left">Asignado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.nombre}</td>
              <td className="py-2 px-4">{item.feha_inicio}</td>
              <td className="py-2 px-4">{item.fecha_final}</td>
              <td className="py-2 px-4">${item.estado}</td>
              <td className="py-2 px-4">${item.asignado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}