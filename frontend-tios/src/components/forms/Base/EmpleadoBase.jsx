import { IoClose } from "react-icons/io5";

export default function EmpleadoBase({formData, handleChange, posiciones, handleSubmit, setOpen}){
    return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Crear Empleado</h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-red-500 text-xl hover:text-red-700"
        >
          <IoClose />
        </button>
      </div>


      <div>
        <label htmlFor="nombre">Nombre</label>
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
        <label htmlFor="cedula">Cédula</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="text"
          name="cedula"
          value={formData.cedula}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="mail">Correo</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="email"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="telefono">Teléfono</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="id_posicion">Posición</label>
        <select
          className="w-full px-3 py-2 border border-gray-300 rounded"
          name="id_posicion"
          value={formData.id_posicion}
          onChange={handleChange}
          required
        >
          <option value="">-- Selecciona una Posición --</option>
          {posiciones.map((posicion) => (
            <option key={posicion.id} value={posicion.id}>
              {posicion.nombre}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sueldo">Sueldo</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="number"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
          required
        />
      </div>

      <button
        type="submit"
        className="block w-full max-w-xs mx-auto bg-blue-500 text-white p-3 rounded text-lg hover:bg-blue-600 transition"
      >
        Crear
      </button>

    </form>
  );
}