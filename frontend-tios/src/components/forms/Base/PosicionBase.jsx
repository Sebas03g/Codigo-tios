export default function PosicionBase({ formData, handleChange, onClose, handleSubmit, permisos, handleCheck }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <button
        type="button"
        onClick={onClose}
        className="absolute top-0 right-0 p-2 text-red-500"
      >
        ✖ Cerrar
      </button>
      <h2 className="text-xl font-bold mb-4">Crear Posición</h2>
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
        <label>Permisos</label>
        <div>
          {permisos.map((permiso) => (
            <div key={permiso.id}>
              <label>
                <input
                  type="checkbox"
                  value={permiso.id}
                  checked={formData.permisos.includes(String(permiso.id))}
                  onChange={handleCheck}
                />
                {permiso.nombre}
              </label>
            </div>
          ))}
        </div>
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Crear
      </button>
    </form>
  );
}
