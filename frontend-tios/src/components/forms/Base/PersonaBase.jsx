import { IoClose } from "react-icons/io5";

export default function PersonaBase({
  titulo,
  tipo,
  handleSubmit,
  setOpen,
  formData,
  handleChange
}) {
  return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Crear {titulo}</h2>
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
                <label htmlFor="ruc">{tipo}</label>
                <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                name="ruc"
                value={formData.ruc}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label htmlFor="mail">Mail</label>
                <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="mail"
                name="mail"
                value={formData.mail}
                onChange={handleChange}
                required
                />
            </div>

            <div>
                <label htmlFor="telefono">Telefono</label>
                <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
                type="telephone"
                name="telefono"
                value={formData.telefono}
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