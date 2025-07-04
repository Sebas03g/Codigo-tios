import TablaVenta from "../Tables/TablaVenta";

export default function VentaPage({
    handleCliente, handleAgregarElemento,
    tableData, onSeleccionar, setCantidad,
    cliente,setPrecioUnidad, handleVenta,
    porcentaje,setPorcentaje
}){
    

    return (
        <div className="min-h-screen p-8 bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Realizar Venta</h1>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                    
                    <button
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={handleCliente}
                    >
                        {cliente ? "Modificar": "Cliente"}
                    </button>
                    {cliente && (
                        <div className="text-sm text-gray-700">
                            <p><span className="font-semibold">Cliente:</span> {cliente.nombre}</p>
                            <p><span className="font-semibold">RUC:</span> {cliente.ruc}</p>
                        </div>
                    )}
          
                    <label className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-700">
                        <span>Porcentaje:</span>
                        <input
                            type="number"
                            min={0}
                            max={100}
                            value={porcentaje}
                            onChange={(e) => setPorcentaje(e.target.value)}
                            className="w-24 px-2 py-1 border border-gray-300 rounded-md"
                        />
                        <span>%</span>
                    </label>
                </div>

                <TablaVenta
                    data={tableData}
                    onSeleccionar={onSeleccionar}
                    setCantidad={setCantidad}
                    setPrecioUnidad={setPrecioUnidad}
                />

                <div className="mt-4">
                    <button
                        onClick={handleAgregarElemento}
                        className="min-w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                    >
                        Agregar Elemento
                    </button>
                </div>
                <div className="mt-4">
                    <button
                        onClick={handleVenta}
                        className="min-w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Finalizar Venta
                    </button>
                </div>
            </div>
        </div>
    );
}