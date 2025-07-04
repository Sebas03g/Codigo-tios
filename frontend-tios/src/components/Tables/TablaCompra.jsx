export default function TablaCompra({ data, onSeleccionar, setCantidad, setPrecioUnidad }) {


  return (
    <div className="h-[300px] overflow-y-auto">
        <table className="w-full table-fixed border border-gray-300">
            <thead className="bg-gray-200 text-left">
            <tr>
                <th className="w-1/3 p-2 border-b">Codigo</th>
                <th className="w-1/3 p-2 border-b">Nombre</th>
                <th className="w-1/3 p-2 border-b">Tipo de Unidad</th>
                <th className="w-1/3 p-2 border-b">Percio por Unidad</th>
                <th className="w-1/3 p-2 border-b">Cantidad</th>
            </tr>
            </thead>
            <tbody>

                {data.map(item => (
                    <tr
                        key={item.id}
                        className="border-t cursor-pointer hover:bg-gray-100"
                        onClick={() => onSeleccionar(item)}
                    >
                    <td className="py-2 px-4">{item.codigo}</td>
                    <td className="py-2 px-4">{item.nombre}</td>
                    <td className="py-2 px-4">{item.tipo_unidad}</td>
                    <td className="py-2 px-4">
                      <input
                        type="number"
                        min={0.01}
                        value={item.precio_unidad}
                        onChange={(e) => setPrecioUnidad(e.target.value, item)}
                        className="border border-gray-300 px-4 py-2 rounded w-full"
                        required
                      />
                    </td>
                    <td className="py-2 px-4">

                      <input
                        type="number"
                        min={1}
                        value={item.cantidad}
                        onChange={(e) => setCantidad(e.target.value, item)}
                        className="border border-gray-300 px-4 py-2 rounded w-full"
                        required
                      />

                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
