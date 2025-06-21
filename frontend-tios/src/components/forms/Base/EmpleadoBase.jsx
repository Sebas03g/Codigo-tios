export default function EmpleadoBase({formData, handleChange, posiciones, handleSubmit}){
    return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-0 right-0 p-2 text-red-500"
      >
        ✖ Cerrar
      </button>
      <h2 className="text-xl font-bold mb-4">Crear Empleado</h2>

      <div>
        <label htmlFor="nombre">Nombre</label>
        <input
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
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="posicion">Posición</label>
        <select
          name="posicion"
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
          type="number"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Crear
      </button>
    </form>
  );
}