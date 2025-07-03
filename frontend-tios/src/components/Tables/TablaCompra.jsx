export default function TablaEditable({ data }) {
  const handleChange = (index, campo, valor) => {
    const nuevasFilas = [...filas];
    nuevasFilas[index][campo] = valor;
    setFilas(nuevasFilas);
  };

  return (
    <div className="h-[300px] overflow-y-auto">
        <table className="min-w-full table-fixed border border-gray-300">
            <thead className="bg-gray-200 text-left">
            <tr>
                <th className="w-1/3 p-2 border-b">Nombre</th>
                <th className="w-1/3 p-2 border-b">Valor</th>
                <th className="w-1/3 p-2 border-b">Acción</th>
            </tr>
            </thead>
            <tbody>

                {tableData.map(item => (
                    <tr
                        key={item.id}
                        className="border-t cursor-pointer hover:bg-gray-100"
                        onClick={() => onSeleccionar(item)}
                    >
                    <td className="py-2 px-4">{item.codigo}</td>
                    <td className="py-2 px-4">{item.nombre}</td>
                    <td className="py-2 px-4">{item.descripcion}</td>
                    <td className="py-2 px-4">{item.tipo_unidad}</td>
                    <td className="py-2 px-4">{item.precio_unidad}</td>
                    <td className="py-2 px-4">{item.cantidad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}
