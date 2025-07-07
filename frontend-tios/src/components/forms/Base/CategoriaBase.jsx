import { IoClose } from "react-icons/io5";

export default function CategoriaBase({
    formData, handleSubmit, setOpen, handleChange, 
    handleMantenimiento, mantenimiento, tiempoData, 
    handleTimeChange, tipo
}){
    return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto relative bg-white p-4 shadow rounded">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Crear Posicion</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="text-red-500 text-xl hover:text-red-700"
          >
            <IoClose />
          </button>
      </div>

      <div>
        <label htmlFor="nombre" className="block font-medium">Nombre</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="descripcion" className="block font-medium">Descripción</label>
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>

      {!formData.venta ? (
        <div>
          <label htmlFor="tipo_unidad" className="block font-medium">Tipo de Unidad</label>
          <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            name="tipo_unidad"
            value={formData.tipo_unidad}
            onChange={handleChange}
            required
          />
        </div>
      ) : (
        <div>
          <label className="flex items-center space-x-2">
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded"
              type="checkbox"
              checked={mantenimiento}
              onChange={handleMantenimiento}
            />
            <span>¿Tiene mantenimiento?</span>
          </label>

          {mantenimiento && (
            <div className="mt-2 grid grid-cols-1 gap-2">
              <label>Días</label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="number"
                name="dias"
                value={tiempoData.dias}
                onChange={handleTimeChange}
              />
              <label>Meses</label>
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="number"
                name="meses"
                value={tiempoData.meses}
                onChange={handleTimeChange}
              />
              <label>Años</label>
              <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="number"
                name="anios"
                value={tiempoData.anios}
                onChange={handleTimeChange}
              />
            </div>
          )}
        </div>
      )}

      <button 
      type="submit" 
      className="block w-full max-w-xs mx-auto bg-blue-500 text-white p-3 rounded text-lg hover:bg-blue-600 transition">
        Guardar
      </button>
    </form>
  );
}