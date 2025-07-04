import { IoClose } from "react-icons/io5";

export default function PosicionBase({ formData, handleChange, setOpen, handleSubmit, permisos, handleCheck }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-4xl mx-auto">
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

      <div className="flex gap-6">
        <div className="flex-1 space-y-4">
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
        </div>

        <div className="w-1/2 max-h-60 overflow-y-auto border border-gray-300 rounded p-3">
          <label className="font-semibold block mb-2">Permisos</label>
          {permisos.map((permiso) => (
            <div key={permiso.id} className="flex items-center mb-2">
              <input
                type="checkbox"
                value={permiso.id}
                checked={formData.permisos.includes(String(permiso.id))}
                onChange={handleCheck}
                className="mr-2"
              />
              <span>{permiso.nombre}</span>
            </div>
          ))}
        </div>
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
