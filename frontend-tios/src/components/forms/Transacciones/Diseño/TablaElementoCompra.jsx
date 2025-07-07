export default function TablaElementoCompra({ dataInventario, handleCheck }) {
  return (
    <div className="overflow-x-auto max-h-[400px] overflow-y-auto border rounded shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-600 font-semibold">
          <tr>
            <th className="px-4 py-2">Proveedor</th>
            <th className="px-4 py-2">Precio/U</th>
            <th className="px-4 py-2">Cantidad</th>
            <th className="px-4 py-2 text-center">Seleccionar</th>
          </tr>
        </thead>
        <tbody>
          {dataInventario.map((item) => (
            <tr key={item.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{item.proveedor?.nombre || "—"}</td>
              <td className="px-4 py-2">${item.precio}</td>
              <td className="px-4 py-2">{item.cantidad}</td>
              <td className="px-4 py-2 text-center">
                <input type="checkbox" value={item.proveedor?.id} onChange={(item) => handleCheck(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}