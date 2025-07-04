export default function TablaVenta({ data, onSeleccionar, setCantidad, setPrecioUnidad }) {


  return (
    <div className="h-[300px] overflow-y-auto">
        <table className="min-w-full table-fixed border border-gray-300">
            <thead className="bg-gray-200 text-left">
            <tr>
                <th className="w-1/3 p-2 border-b">Nombre</th>
                <th className="w-1/3 p-2 border-b">RUC</th>
                <th className="w-1/3 p-2 border-b">Fecha Compra</th>
                <th className="w-1/3 p-2 border-b">Total</th>
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
                    <td className="py-2 px-4">{item.precio_unidad}</td>
                    <td className="py-2 px-4">

                      <input
                        type="number"
                        min={1}
                        max={item.cantidad_maxima}
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
