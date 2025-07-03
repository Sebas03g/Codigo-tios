export default function ComprasPage({}){
    

    return (
        <div className="min-h-screen p-8 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Mi Página</h1>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
                <button
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    onClick={handelCliente}
                >
                    Cliente
                </button>

                <label className="flex items-center gap-2 text-gray-700">
                    <input
                    type="checkbox"
                    checked={estadoCredito}
                    onChange={() => setEstadoCredito(!estadoCredito)}
                    className="w-4 h-4"
                    />
                    Credito
                </label>

                {estadoCredito && (
                    <label className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-gray-700">
                        <span>Fecha:</span>
                        <input
                            type="date"
                            value={fecha}
                            onChange={(e) => setFecha(e.target.value)}
                            className="px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </label>
                )}
            </div>

            <TablaCompra/>

            <div className="mt-4">
            <button
                onClick={handleAgregarFila}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Agregar Elemento
            </button>
            </div>
        </div>
        </div>
    );
}