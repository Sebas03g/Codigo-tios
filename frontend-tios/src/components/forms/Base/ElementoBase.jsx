import TablaProveedores from "../TablaProveedores.jsx"; // Asegúrate que el nombre del archivo sea correcto

export default function ElementoBase({
    setOpen, handleSubmit, proveedorData, handleChangeProveedor,
    handleChange, formData, diccionario, handleSeleccionProveedor,
    handleChangeUbicacion, ubicacionesData, ubicacionId, herramienta
}){
    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto bg-white p-6 shadow rounded relative">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-red-500 font-bold"
          >
            ✖
          </button>
    
          <h2 className="text-xl font-bold mb-4">Crear Elemento</h2>
    
          <div className="grid gap-4">
            <label htmlFor="nombre">Nombre</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                name="nombre"
                value={proveedorData.nombre}
                onChange={handleChangeProveedor}
                required
              />
            
    
            <label htmlFor="ruc">RUC</label>
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                name="ruc"
                value={proveedorData.ruc}
                onChange={handleChangeProveedor}
                required
              />
            
    
            <label htmlFor="mail">Correo</label>
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                name="mail"
                value={proveedorData.mail}
                onChange={handleChangeProveedor}
              />
            
    
            <label htmlFor="telefono">Teléfono</label>          
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="tel"
                name="telefono"
                value={proveedorData.telefono}
                onChange={handleChangeProveedor}
              />
           
    
            <label htmlFor="precio">Precio</label>         
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleChange}
                step="0.01"
                required
              />
            
    
            <label htmlFor="descuento">Descuento</label>
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="number"
                name="descuento"
                value={formData.descuento}
                onChange={handleChange}
                step="0.01"
              />
            
    
            {herramienta && (
                <div>
                    <label htmlFor="cantidad">Cantidad</label>
                        <input
                            className="w-full px-3 py-2 border border-gray-300 rounded"
                            type="number"
                            name="cantidad"
                            value={formData.cantidad}
                            onChange={handleChange}
                            step="0.01"
                        /> 
    
                </div>
            )}

            <select
                name="id_ubicacion"
                value={ubicacionId}
                onChange={handleChangeUbicacion}
                required
            >
                <option value="">-- Selecciona una Ubicación --</option>
                {ubicacionesData.map((ubicacion) => (
                    <option key={ubicacion.id} value={ubicacion.id}>
                        {ubicacion.nombre}
                    </option>
                ))}

            </select>
    
          </div>
    
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Proveedores sugeridos</h3>
            <TablaProveedores datos={diccionario} onSeleccionar={handleSeleccionProveedor} />
          </div>
    
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
            Guardar
          </button>
        </form>
      );
}