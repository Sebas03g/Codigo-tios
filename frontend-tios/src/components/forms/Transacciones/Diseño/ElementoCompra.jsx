import { IoClose } from "react-icons/io5";
import TablaElementoCompra from "../Diseño/TablaElementoCompra";

export default function ElementoCompraDesign({
  dataUbicaciones, dataInventario,
  setOpen, handleSubmit, formData,
  handleChange, handleCheck
}) {
  return (
    <form onSubmit={handleSubmit} className="fill-w mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Crear Elemento de Compra</h2>
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

          <div>
            <label className="block mb-1">Ubicación</label>
            <select
              name="ubicacion"
              value={formData.id_ubicacion || ""}
              onChange={handleChange}
              className="w-full border border-gray-300 px-3 py-2 rounded"
              required
            >
              <option value="">-- Selecciona una ubicación --</option>
              {dataUbicaciones.map((ubi) => (
                <option key={ubi.id} value={ubi.id}>
                  {ubi.nombre}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition mt-4"
          >
            Crear
          </button>
        </div>
        <div className="flex-1">
          <TablaElementoCompra dataInventario={dataInventario} handleCheck={handleCheck} />
        </div>
      </div>
    </form>
  );
}
