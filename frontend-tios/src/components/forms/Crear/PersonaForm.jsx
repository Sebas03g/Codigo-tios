export default function PersonaForm({
  titulo,
  tipo,
  handleSubmit,
  onClose,
  formData,
  handleChange
}) {
  return (
        <form onSubmit={handleSubmit}>
            <button
                type="button"
                onClick={onClose}
                className="absolute top-0 right-0 p-2 text-red-500"
            >
                ✖ Cerrar
            </button>
            <h2 className="text-xl font-bold mb-4">Crear {titulo}</h2>

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
                <label htmlFor="ruc">{tipo}</label>
                <input
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
                type="telephone"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
                />
            </div>

        </form>
    );

}