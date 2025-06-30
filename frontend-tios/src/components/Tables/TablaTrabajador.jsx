export default function TablaTrabajador({ datos, onSeleccionar}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">RUC</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Posicion</th>
            <th className="py-2 px-4 text-left">Sueldo</th>
            <th className="py-2 px-4 text-left">Fecha de Empleo</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.ruc}</td>
              <td className="py-2 px-4">{item.nombre}</td>
              <td className="py-2 px-4">{item.posicion}</td>
              <td className="py-2 px-4">${item.suedlo}</td>
              <td className="py-2 px-4">${item.fecha_empleo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}