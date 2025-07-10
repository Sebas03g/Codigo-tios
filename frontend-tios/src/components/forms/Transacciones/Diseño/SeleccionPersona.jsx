export default function SeleccionPersonaDesign({
  setOpen, handleSubmit, formData,
  handleChange, tipo
}) {
  return (
    <form onSubmit={handleSubmit} className="fill-w mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Ingresar Datos {tipo}</h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-red-500 hover:text-red-700 text-2xl"
        >
          <IoClose />
        </button>
      </div>

      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          {["ruc", "nombre", "telefono", "mail", "cantidad", "precio"].map((field) => (
            <div key={field}>
              <label className="block capitalize mb-1">{field}</label>
              <input
                type={field === "cantidad" || field === "precio" ? "number" : "text"}
                name={field}
                value={formData[field] || ""}
                onChange={handleChange}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>
          ))}

            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mt-4"
            >
                Crear
            </button>

        </div>
        
    </div>
    </form>
  );

}