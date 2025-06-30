export default function TablaCategoriHerramienta({ datos, onSeleccionar}) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow rounded-lg">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="py-2 px-4 text-left">Codigo</th>
            <th className="py-2 px-4 text-left">Nombre</th>
            <th className="py-2 px-4 text-left">Descripción</th>
            <th className="py-2 px-4 text-left">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {datos.map(item => (
            <tr
              key={item.id}
              className="border-t cursor-pointer hover:bg-gray-100"
              onClick={() => onSeleccionar(item)}
            >
              <td className="py-2 px-4">{item.codigo}</td>
              <td className="py-2 px-4">{item.nombre}</td>
              <td className="py-2 px-4">{item.descripcion}</td>
              <td className="py-2 px-4">{item.cantidad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}