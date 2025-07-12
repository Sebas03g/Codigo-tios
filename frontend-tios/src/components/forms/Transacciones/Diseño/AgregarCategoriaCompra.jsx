import { useState } from "react";
import Select from "react-select";
import { IoClose } from "react-icons/io5";

export default function AgregarCategoriaCompraDesign({
  handleSubmit,
  setOpen,
  formData,
  handleChange,
  handleTimeChange,
  tiempoData,
  opcionesInventario,
  ultimoPrecio
}) {
  const [mantenimiento, setMantenimiento] = useState(false);

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto relative bg-white p-4 shadow rounded"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Categoria</h2>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-red-500 text-xl hover:text-red-700"
        >
          <IoClose />
        </button>
      </div>

      <div>
        <label htmlFor="codigo" className="block font-medium">
          Codigo
        </label>
        <textarea
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label htmlFor="nombre_categoria" className="block font-medium">
          Nombre
        </label>
        <Select
          name="nombre_categoria"
          options={opcionesInventario}
          isSearchable
          onChange={(selected) =>
            handleChange({
              target: {
                name: "nombre_categoria",
                value: selected?.value || "",
              },
            })
          }
          value={
            formData.nombre_categoria
              ? { value: formData.id_categoria, label: formData.nombre_categoria }
              : null
          }
          placeholder="Selecciona o escribe el nombre"
        />
      </div>

      <div>
        <label htmlFor="descripcion_categoria" className="block font-medium">
          Descripción
        </label>
        <textarea
          name="descripcion_categoria"
          value={formData.descripcion_categoria}
          onChange={handleChange}
          required
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="tipo_categoria"
            value="Inventario"
            onChange={handleChange}
          />
          Inventario
        </label>
        <label>
          <input
            type="radio"
            name="tipo_categoria"
            value="Herramienta"
            onChange={handleChange}
          />
          Herramienta
        </label>
      </div>

      {formData.tipo_categoria === "Inventario" ? (
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={mantenimiento}
              onChange={() => setMantenimiento(!mantenimiento)}
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
      ) : (
        <div>
          <label htmlFor="tipo_unidad" className="block font-medium">
            Tipo de Unidad
          </label>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded"
            type="text"
            name="tipo_unidad"
            value={formData.tipo_unidad}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div>
        <label htmlFor="cantidad" className="block font-medium">Cantidad</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="number"
          name="cantidad"
          value={formData.cantidad}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="precio" className="block font-medium">Precio</label>
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded"
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          required
        />
        {ultimoPrecio == 0 && (
          <label className="block font-small">Ultimo precio: {ultimoPrecio}</label>
        )}
      </div>
      

      <button
        type="submit"
        className="block w-full max-w-xs mx-auto bg-blue-500 text-white p-3 rounded text-lg hover:bg-blue-600 transition"
      >
        Guardar
      </button>
    </form>
  );
}
